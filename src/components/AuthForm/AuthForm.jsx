import React, { useState } from 'react';
import './AuthForm.css'; // Import CSS
import 'animate.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login/signup forms

  // Function to switch to signup form
  const handleSignupClick = () => {
    setIsLogin(false);
  };

  // Function to switch to login form
  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div className="auth-container">
    <div className="wrapper  animate__animated animate__slideInRight">
      <div className="title-text">
        <div className={`title login ${!isLogin ? 'move-left' : ''}`}>Login Form</div>
        <div className={`title signup ${isLogin ? 'move-right' : ''}`}>Signup Form</div>
      </div>

      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleLoginClick}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSignupClick}
          />
          <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
            Login
          </label>
          <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
            Signup
          </label>
          <div className={`slider-tab ${!isLogin ? 'move-tab' : ''}`}></div>
        </div>

        <div className="form-inner">
          {/* Login Form */}
          <form className={`login ${!isLogin ? 'hide' : ''}`}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="/signup" onClick={handleSignupClick}>Signup now</a>
            </div>
          </form>

          {/* Signup Form */}
          <form className={`signup ${isLogin ? 'hide' : ''}`}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthForm;
