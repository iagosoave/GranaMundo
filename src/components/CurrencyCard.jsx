import React from 'react';
import { ModernSelect } from './ModernSelect';
import { currencies } from '../data/currencies';

export const CurrencyCard = ({ type, currency, onChange, className = '' }) => {
  return (
    <div className={`relative ${className} font-['Poppins']`}>
      <div className={`absolute inset-0 z-[1] bg-gradient-to-br ${currencies[currency].background} rounded-2xl`} />
      <div className="relative z-[2] bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
        <label className="block text-sm font-medium text-gray-600 mb-4">{type}</label>
        <div className="flex items-center gap-4">
          <ModernSelect
            value={currency}
            onChange={onChange}
            options={currencies}
          />
          <span className={`text-sm font-medium ${currencies[currency].trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {currencies[currency].trend}
          </span>
        </div>
      </div>
    </div>
  );
};
