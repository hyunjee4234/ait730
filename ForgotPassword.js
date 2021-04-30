import React from "react";

const ForgotPassword = () => {
  return (
    <section className="container">
    <h1 className="large text.primary">Forgot Password?</h1>
    <p className="lead">
        <i className="fas fa-user"></i>Please enter your Name & Email Address
    </p>
    <form className="form" onSubmit={showPassword}>
        <div className="form-group">
            <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" required/>
        </div>

        <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
    </section>
  );
};

function showPassword() {
    alert("this is the password: "  + "비번")
}

export default ForgotPassword;
