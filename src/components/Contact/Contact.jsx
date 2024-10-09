import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <div className="first-container">
          <div className="info-container">
            <div>
              <img className="icon" alt="icon" />
              <h3>Address</h3>
              <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
            </div>
            <div>
              <img className="icon" alt="icon" />
              <h3>Let's Talk</h3>
              <p>+1 800 1236879</p>
            </div>
            <div>
              <img className="icon" alt="icon" />
              <h3>General Support</h3>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
        <div className="second-container">
          <h2>Send Us A Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name-input">Tell us your name*</label>
              <input id="name-input" type="text" placeholder="Enter your name" required />
              {/* <input type="text" placeholder="Last name" required /> */}
            </div>
            <div className="form-group">
              <label htmlFor="email-input">Enter your email*</label>
              <input id="email-input" type="text" placeholder="Eg. example@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone-input">Enter phone number*</label>
              <input id="phone-input" type="text" placeholder="Eg. +1 800 000000" required />
            </div>
            <div className="form-group">
              <label htmlFor="message-textarea">Message</label>
              <textarea id="message-textarea" placeholder="Write us a message"></textarea>
            </div>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
