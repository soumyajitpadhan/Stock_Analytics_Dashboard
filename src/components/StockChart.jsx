import React from 'react';
import { useStock } from '../context/StockContext';
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const StockChart = () => {
    const { stocks } = useStock();

    if (!stocks || stocks.length === 0) {
        return <p className="text-center text-gray-500">Loading stock data...</p>;
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Stock Price Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={stocks}
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fill: "#333" }} />
                    <YAxis tick={{ fill: "#333" }} />
                    <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke="#000" />

                    {/* Brush for zooming */}
                    <Brush dataKey="date" height={30} stroke="#8884d8" />

                    {/* Bars */}
                    <Bar dataKey="open" fill="#28a745" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="close" fill="#dc3545" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StockChart;
