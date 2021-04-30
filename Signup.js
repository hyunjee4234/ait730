import React from 'react' ;


const Signup = () => {
  return (

        <section className="container">
            <h1 className="large text.primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i>Create Your Account</p>
            <form className="form" action="create-profile.html">
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" required />

                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" />
                    <email className="form-text">

                    </email>
                </div>
                <div className="form-group">
                    <input type="password"
                    placeholder="Confirm Password"
                    name="password6"
                    minlength="6"
                    />
                </div>
                <input type ="submit" className="btn btn-primary" value="Register" />

            </form>

            <p className="my-1">
                Already have an account? <a href="/Signin">Sign In</a>
            </p>
        </section>
    )

    
}
export default Signup
