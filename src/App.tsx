import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

   

   return (
      <div className="App">
         Crypto Coin Currency
      </div>
   );
}

export default App;
