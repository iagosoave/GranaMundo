import React, { useState } from 'react';
import { ArrowLeftRight, CircleDollarSign, TrendingUp, Newspaper } from 'lucide-react';
import { CurrencyCard } from './components/CurrencyCard';
import { ExchangeChart } from './components/ExchangeChart';
import { MarketNewsCard } from './components/MarketNewsCard';
import { historicalData, marketNews } from './data/mockData';
import { currencies } from './data/currencies';

const App = () => {
  const [amount, setAmount] = useState('1.00');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [convertedResult, setConvertedResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('converter');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1W');

  const handleConversion = async () => {
    setLoading(true);
    try {
      const response = await fetch( `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=c0a8f47372-92a720edc4-sqaugf`
      );

      if (!response.ok) throw new Error('Falha ao buscar as taxas de câmbio.');

      const data = await response.json();
      setConvertedResult({
        convertedAmount: data.result[toCurrency],
        rate: data.result[toCurrency] / parseFloat(amount),
        timestamp: new Date().toLocaleString(),
      });
    } catch (error) {
      console.error('Erro:', error.message);
      alert('Falha ao converter a moeda. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 font-['Poppins']">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <CircleDollarSign size={24} className="text-[#2E7D32]" />
              <span className="font-bold text-xl bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent">
                GranaMundo
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent mb-4">
            Conversão de Moedas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe taxas em tempo real, análises de mercado e faça conversões precisas com nossa plataforma avançada
          </p>
        </header>

        {/* Tabs Navigation */}
        <nav className="mb-8">
          <div className="flex gap-4 border-b border-gray-200">
            {[
              { id: 'converter', icon: ArrowLeftRight, label: 'Conversor' },
              { id: 'charts', icon: TrendingUp, label: 'Gráficos' },
              { id: 'news', icon: Newspaper, label: 'Notícias' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#2E7D32] text-[#2E7D32]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content Area */}
          <div className="lg:col-span-2">
            {activeTab === 'converter' && (
              <div className="space-y-6">
                {/* Amount Input */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Valor</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 p-2"
                      placeholder="Digite o valor"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                      {currencies[fromCurrency].symbol}
                    </span>
                  </div>
                </div>

                {/* Currency Selection Cards */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <CurrencyCard
                      type="De"
                      currency={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                    />

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden">
                      <button
                        onClick={handleSwapCurrencies}
                        className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                      >
                        <ArrowLeftRight className="text-blue-600" />
                      </button>
                    </div>

                    <CurrencyCard
                      type="Para"
                      currency={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                    />
                  </div>
                </div>

                {/* Convert Button */}
                <button
                  onClick={handleConversion}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white text-lg font-medium py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? 'Convertendo...' : 'Converter'}
                </button>

                {/* Conversion Result */}
                {convertedResult && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg animate-slideUp">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{currencies[fromCurrency].flag}</span>
                        <span className="text-xl">{amount} {fromCurrency}</span>
                      </div>
                      <span className="text-2xl">=</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{currencies[toCurrency].flag}</span>
                        <span className="text-xl font-bold">
                          {convertedResult.convertedAmount.toFixed(2)} {toCurrency}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-4">
                      <p>Taxa de câmbio: 1 {fromCurrency} = {convertedResult.rate.toFixed(4)} {toCurrency}</p>
                      <p className="mt-1">Última atualização: {convertedResult.timestamp}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Charts Tab */}
            {activeTab === 'charts' && (
              <ExchangeChart
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                historicalData={historicalData}
                selectedTimeframe={selectedTimeframe}
                setSelectedTimeframe={setSelectedTimeframe}
              />
            )}

            {/* News Tab */}
            {activeTab === 'news' && (
              <div className="space-y-6">
                {marketNews.map((news) => (
                  <MarketNewsCard key={news.id} news={news} />
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Currency Overview */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {Object.entries(currencies).map(([code, currency]) => (
                <div key={code} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                  <h3 className="font-semibold text-xl">{currency.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{currency.flag}</span>
                    <span className="text-xl font-bold">{currency.symbol} {currency.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;