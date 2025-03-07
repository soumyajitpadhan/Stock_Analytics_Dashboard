import React from 'react';
import { useStock } from '../context/StockContext';

const StockSelector = () => {
    const { setSelectedStock } = useStock();
    const stocks = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];

    return (
        <div className="flex justify-center md:justify-start p-4">
            <select
                className="p-3 border border-gray-300 rounded-lg w-48 
                           bg-white shadow-sm focus:outline-none 
                           focus:ring-2 focus:ring-cyan-700 transition 
                           hover:bg-gray-100 text-gray-700 font-semibold"
                onChange={(e) => setSelectedStock(e.target.value)}
            >
                <option value="" disabled selected>📈 Select Stock</option>
                {stocks.map((stock) => (
                    <option key={stock} value={stock}>
                        {stock}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StockSelector;
