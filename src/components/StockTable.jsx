import React from 'react';
import { useStock } from '../context/StockContext';

const StockTable = () => {
    const { stocks, loading, error } = useStock();

    if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
    if (error) return <p className="text-center text-red-500 text-lg font-semibold">{error}</p>;

    return (
        <div className="p-4 flex justify-center">
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[600px] border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white">
                        <tr>
                            <th className="p-3 text-left text-lg">Date</th>
                            <th className="p-3 text-left text-lg">Open</th>
                            <th className="p-3 text-left text-lg">High</th>
                            <th className="p-3 text-left text-lg">Low</th>
                            <th className="p-3 text-left text-lg">Close</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {stocks.map((stock, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition-colors">
                                <td className="p-3">{stock.date}</td>
                                <td className="p-3 text-blue-600 font-semibold">{stock.open.toFixed(2)}</td>
                                <td className="p-3 text-green-600 font-semibold">{stock.high.toFixed(2)}</td>
                                <td className="p-3 text-red-600 font-semibold">{stock.low.toFixed(2)}</td>
                                <td className="p-3 text-black font-bold">{stock.close.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockTable;
