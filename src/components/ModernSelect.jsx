import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const ModernSelect = ({ value, onChange, options, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[1] w-full flex items-center justify-between gap-2 px-4 py-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <img 
            src={options[value].flagImg} 
            alt={`${value} flag`}
            className="w-6 h-6 object-cover rounded-sm"
          />
          <span className="font-medium text-gray-700">{value}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-[999] left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 max-h-60 overflow-auto">
          {Object.entries(options).map(([code, curr]) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                onChange({ target: { value: code } });
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-green-50 transition-colors duration-200"
            >
              <img 
                src={curr.flagImg} 
                alt={`${code} flag`}
                className="w-6 h-6 object-cover rounded-sm"
              />
              <span className="text-sm text-gray-500">- {curr.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
