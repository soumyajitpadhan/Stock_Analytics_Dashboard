import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StockContext = createContext();

const VITE_MARKETSTACK_API_KEY = import.meta.env.VITE_MARKETSTACK_API_KEY;

export const StockProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState("AAPL");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchStockData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.marketstack.com/v1/eod`, {
                params: {
                    access_key: VITE_MARKETSTACK_API_KEY,
                    symbols: selectedStock,
                    limit: 30
                }
            });
            console.log(response.data.data);
            setStocks(response.data.data || []);
        }
        catch (err) {
            setError("Failed to fetch stock data.");
            console.log("Error fetching stock data: ", err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStockData();
    }, [selectedStock])

    return (
        <StockContext.Provider value={{ stocks, selectedStock, setSelectedStock, loading, error }}>
            {children}
        </StockContext.Provider>
    )
}


export const useStock = () => useContext(StockContext);
