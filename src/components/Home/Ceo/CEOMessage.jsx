import React from 'react';
import './CEOMessage.css';
import image from '../../Images/product_28.png';

const CEOMessage = () => {
  return (
    <div className="ceo-container">
      <div className="ceo-message">
        <h1>Message from the CEO</h1>
        <p>
          Welcome to our company! We are committed to delivering the best services
          to our clients and creating a positive impact in our community. Thank you
          for being part of our journey.
        </p>
      </div>
      <div className="ceo-image">
        <img src={image} alt="CEO" className="animated-image" /> {/* Apply animation class */}
        <h4 className="animated-name">Mansoor Majidi</h4> {/* Apply animation class */}
      </div>
    </div>
  );
};

export default CEOMessage;
