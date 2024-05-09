import React from 'react';
import Navbar from './components/Navbar';
import BitcoinPriceCard from './components/Bitcoin';
import Chart from './components/Chart'
import BottomBar from './components/BottomBar';
import './App.css'
import TradeBitcoin from './components/TradeBitcoin';

function App() {

  const handleSellBitcoin = () => {
    alert('Sell Bitcoin ');
  };

  const handleBuyBitcoin = () => {
    alert('Buy Bitcoin ');
  };

  return (
    <div>
      <Navbar />
      <BitcoinPriceCard />
      <Chart />
      <div className="flex-container">
        <TradeBitcoin title="Buy Bitcoin" onClick={handleBuyBitcoin} />
        <TradeBitcoin title="Sell Bitcoin" onClick={handleSellBitcoin} />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
