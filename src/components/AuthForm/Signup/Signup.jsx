import React from "react";


const Signup = () => {
    return (
      <form className="signup">
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
        <div className="signup-link">
          Already a member? <Link to="/login">Login now</Link>
        </div>
      </form>
    );
  };

  export default Signup;