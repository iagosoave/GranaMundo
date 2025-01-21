export const historicalData = {
    '1W': Array.from({length: 7}, (_, i) => ({
      date: new Date(Date.now() - (6-i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      rate: 4.9 + Math.random() * 0.2
    })),
    '1M': Array.from({length: 30}, (_, i) => ({
      date: new Date(Date.now() - (29-i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      rate: 4.9 + Math.random() * 0.3
    })),
    '3M': Array.from({length: 90}, (_, i) => ({
      date: new Date(Date.now() - (89-i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      rate: 4.9 + Math.random() * 0.4
    }))
  };
  
  export const marketNews = [
    {
      id: 1,
      title: "FED mantém taxa de juros inalterada",
      description: "Decisão impacta mercados globais e taxa de câmbio",
      time: "2h atrás",
      impact: "alto"
    },
    {
      id: 2,
      title: "BCE sinaliza possível corte de juros",
      description: "Euro reage à possibilidade de mudança na política monetária",
      time: "4h atrás",
      impact: "médio"
    },
    {
      id: 3,
      title: "Mercado asiático fecha em alta",
      description: "Iene se fortalece após dados econômicos positivos",
      time: "6h atrás",
      impact: "baixo"
    }
  ];
  