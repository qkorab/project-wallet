import React, { useState, useEffect } from 'react';
import '../styleComponents/Bitcoin.scss';
import arrowIcon from '../assets/arrow.svg';
import Bitcoin from '../assets/bitcoin.svg'; 
import TradeBitcoin from './TradeBitcoin'; 



function BitcoinPriceCard() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [showExtraButtons, setShowExtraButtons] = useState(false);

 

  const handleSellBitcoin = () => {
    console.log('Sell Bitcoin action');
  };

  const handleBuyBitcoin = () => {
    console.log('Buy Bitcoin action');
  };
  useEffect(() => {
    fetchBitcoinPrice();
  }, []);

  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      setBitcoinPrice(data.bpi.USD.rate);
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
    }
  };

  const toggleExtraButtons = () => {
    setShowExtraButtons(!showExtraButtons);
  };

  return (
    <div className="bitcoin-price-card">
        <div className="first-card">
            <div className='first-card-container'>
                <div className="coin-logo-name">
                    <div className='logo-and-title'>
                        <button className="logo-coin" >
                            <img src={Bitcoin} />
                        </button>
                        <span className="coin-name">Bitcoin </span>
                    </div>
                    <span className="coin-name-short">BTC </span>
                </div>
                {bitcoinPrice && <p className="coin-price">${bitcoinPrice} BTC</p>}
                <div className="usd">
                  <span className='invest'>$9.153 USD</span>
                  <span className="decrease-percentage">-2.32%</span>
                </div>
                <button className="toggle-button" onClick={toggleExtraButtons}>
                  <img src={arrowIcon} alt="Toggle" className={showExtraButtons ? 'rotate' : ''} />
                </button>
                {showExtraButtons && (
                <div className="flex-container-toggled">
                  <div className="extra-buttons">
                    <TradeBitcoin title="Buy Bitcoin" onClick={handleBuyBitcoin} />
                    <TradeBitcoin title="Sell Bitcoin" onClick={handleSellBitcoin} />
                  </div>
                </div>
                )}
            </div>
        </div>
    </div>
  );
}

export default BitcoinPriceCard;
