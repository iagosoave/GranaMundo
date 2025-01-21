import brasil from '../assets/brasil.png';
import usa from '../assets/usa.png';
import uk from '../assets/uk.png';
import ue from '../assets/ue.png';

export const currencies = {
  USD: { 
    name: 'Dólar Americano', 
    flag: '🇺🇸', 
    symbol: '$',
    trend: '+0.5%',
    background: 'from-blue-500/10 to-blue-700/10',
    flagImg: usa
  },
  EUR: { 
    name: 'Euro', 
    flag: '🇪🇺', 
    symbol: '€',
    trend: '-0.3%',
    background: 'from-indigo-500/10 to-indigo-600/10',
    flagImg: ue
  },
  GBP: { 
    name: 'Libra Esterlina', 
    flag: '🇬🇧', 
    symbol: '£',
    trend: '+0.2%',
    background: 'from-purple-400/10 to-purple-700/10',
    flagImg: uk
  },
  BRL: { 
    name: 'Real Brasileiro', 
    flag: '🇧🇷', 
    symbol: 'R$',
    trend: '+0.7%',
    background: 'from-green-400/10 to-green-700/10',
    flagImg: brasil
  }
};
