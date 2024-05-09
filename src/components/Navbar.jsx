import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styleComponents/Navbar.scss';
import arrowLeftIcon from '../assets/arrow-left.svg';
import ellipsisIcon from '../assets/ellipsis-vertical.svg';
import editIcon from '../assets/edit-icon.svg';
import courierIcon from '../assets/courier-icon.svg';
import shareIcon from '../assets/share-icon.svg';
import removeIcon from '../assets/remove-icon.svg';

function Navbar({ title = 'Bitcoin Wallet' }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  const handleBackButtonClick = () => {
    alert('Going back!');
  };

  return (
    <div className="navbar">
      <div className="back-button" onClick={handleBackButtonClick}>
        <img src={arrowLeftIcon} alt="Back" />
      </div>
      <h1>{title}</h1>
      <div className="options-button" onClick={openModal}>
        <img src={ellipsisIcon} alt="Options" />
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <button className='edit-button'>Edit 
              <img src={editIcon} alt="Edit" />
            </button>
            <button className='courier-button'>Courier
              <img src={courierIcon} alt="Courier" />
            </button>
            <button className='share-button'>Share
              <img src={shareIcon} alt="Share" />
            </button>
            <button className='remove-button'>Remove
              <img src={removeIcon} alt="Remove" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string, 
};

export default Navbar;
