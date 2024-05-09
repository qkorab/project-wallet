import React, { useState, useEffect } from 'react';
import '../styleComponents/BottomBar.scss';
import gearSolid from '../assets/gear-solid.svg';
import wallet from '../assets/wallet-solid.svg';
import notification from '../assets/bell-solid.svg';
import compass from '../assets/compass-solid.svg';
import compassRegular from '../assets/compass-regular.svg';

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeItem, setActiveItem] = useState(null); 

  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsVisible(bottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bottom-bar ${isVisible ? 'visible' : 'hidden'}`}>
      <img
        src={wallet}
        alt="Wallet"
        className={`bottom-bar__item ${activeItem === 'wallet' ? 'active' : ''}`}
        onClick={() => setActiveItem('wallet')}
      />
      <img
        src={gearSolid}
        alt="Settings"
        className={`bottom-bar__item ${activeItem === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveItem('settings')}
      />
      <img
        src={notification}
        alt="Notifications"
        className={`bottom-bar__item ${activeItem === 'notifications' ? 'active' : ''}`}
        onClick={() => setActiveItem('notifications')}
      />
      {activeItem === 'explore' ? (
        <img
          src={compassRegular}
          alt="Explore"
          className="bottom-bar__item active"
          onClick={() => setActiveItem('explore')}
        />
      ) : (
        <img
          src={compass}
          alt="Explore"
          className={`bottom-bar__item ${activeItem === 'explore' ? 'active' : ''}`}
          onClick={() => setActiveItem('explore')}
        />
      )}
    </div>
  );
};

export default BottomBar;
