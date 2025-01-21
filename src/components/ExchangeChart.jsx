import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ExchangeChart = ({ fromCurrency, toCurrency, historicalData, selectedTimeframe, setSelectedTimeframe }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg font-['Poppins']">
      <h2 className="text-2xl font-semibold mb-4">Exchange Rate - {fromCurrency} to {toCurrency}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={historicalData[selectedTimeframe]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'Poppins'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="rate" 
            stroke="#16a34a" 
            strokeWidth={2}
            dot={{ fill: '#16a34a', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#16a34a' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 flex justify-center gap-4">
        {['1W', '1M', '3M'].map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTimeframe(time)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedTimeframe === time 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-green-100'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
