import React from 'react'



function SignUp () {
    return ( 
        <section>
            <div className="form-container sign-up">
        <form action="form">
        <h1>Create Account</h1>
        <div className="social-icons">
        <a href=""><img src={require('./apple.png')} alt="apple" /></a>
        <a href=""><img src={require('./google.jpg')} alt="google" /></a>
        <a href=""><img src={require('./microsoft.jpg')} alt="microsoft" /></a>
        <a href=""><img src={require('./facebook.jpg')} alt="facebook" /></a>
        </div>
        <span>or use your email for registration</span>
        <input id="enter" type="text" placeholder="Name" className="input" />
        <input id="enter" type="email" placeholder="Email" className="input" />
        <label for="password" class="password">
            <input
            id="enter"
            className="input"
            type="password"
             // className="password"
            placeholder="Password"
            />
            <div className="eye-icons">
            <i className="fa fa-eye" id="btnShow"></i>
            <i className="fa fa-eye-slash" id="btnClose"></i>
            </div>
        </label>
        <button>Sign UP</button>
        </form>
    </div>
        </section>
    );
}

export default SignUp;