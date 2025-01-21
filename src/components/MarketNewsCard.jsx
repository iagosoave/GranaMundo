import React from 'react';
import { Clock } from 'lucide-react';

export const MarketNewsCard = ({ news }) => (
  <div className="group bg-white/80 backdrop-blur-xl rounded-xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {news.description}
        </p>
      </div>
      <span className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${
        news.impact === 'alto' 
          ? 'bg-red-100 text-red-700 group-hover:bg-red-200' 
          : news.impact === 'médio'
          ? 'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-200'
          : 'bg-green-100 text-green-700 group-hover:bg-green-200'
      }`}>
        {news.impact}
      </span>
    </div>
    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
      <Clock size={12} className="group-hover:text-gray-700 transition-colors duration-300" />
      <span className="group-hover:text-gray-700 transition-colors duration-300">
        {news.time}
      </span>
    </div>
  </div>
);