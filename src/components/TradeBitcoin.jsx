import React from 'react';
import Dollar from '../assets/dollar-sign-solid.svg';


const TradeBitcoin = ({ title, onClick }) => {

    const TradeClassName = title === 'Buy Bitcoin' ? 'buy-btc' : 'sell-btc';

    return (
        <div className='buy-sell-card '>
            <div className='trade'>
                <button className={TradeClassName} onClick={onClick}>
                    <img src={Dollar} alt="Dollar" />
                </button>
                <h2 className='container'>{title}</h2>
            </div>
        
        </div>
    );
};

export default TradeBitcoin;
