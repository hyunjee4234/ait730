import React from "react";

const Signin = () => {
  return (
    <section className="container">
      <div className="title-text">
        <div className="form">
          <form className="register-form">
            <h1>Login Registration</h1>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>

            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="/ForgotPassword">Forgot password?</a>
            </div>
            <div className="field">
              <button>Log in</button>
            </div>

            <div className="signup-link">
              Not a member?{" "}
              <a href="/Signup" className="button" id="signup">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Signin;
