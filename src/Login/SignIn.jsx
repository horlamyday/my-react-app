import React from 'react'
import "./login.css";
function SignIn() {
    return ( 
  <>
  <div id="item">
  <section className='form-border'>
   
      <div className="form-container sign-in">
        <form className='sign' action="form">
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href=""><img src="./Assets/apple.png" alt="" /></a>
            <a href=""><img src="./Assets/google.jpg" alt="" /></a>
            <a href=""><img src="./Assets/microsoft.jpg" alt="" /></a>
            <a href=""><img src="./Assets/facebook.jpg" alt="" /></a>
          </div>
          <span>or use your email password</span>
          <input id="enter" type="email" placeholder="Enter your Email" className="input" />
          <input id="enter" type="password" placeholder="password" className="input" />
          <a href="#">Forgot your password</a>
          <button> Sign in</button>
        </form>
        <div >
      <img className='WA0010' src={require('../images/IMG-20230803-WA0010.jpg')} alt="" />
      </div>
      </div>
      
      {/* -- toggle container --

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome back</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>
              Register with your personal details to use all of the site
              features
            </p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div> */}
    </section>
    </div>
    </>
    );
}

export default SignIn;