import React, {useState} from 'react'
import './LoginPage.css';
import { assets } from '../../assets/assets';



const LoginPage = ({ setShowLogin }) => {


    const [currState, setCurrState] = useState("Login");


    return (
        <div className='login-page'>
          <form className="login-page-container">
            <div className="login-page-title">
              <h2>{currState}</h2>
              <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-page-inputs">
              {currState === "Login" ?<></> : <input name='name' type="text" placeholder='Your name' required />}
              <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Password' required />
            </div>
            <button> {currState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className="login-page-condition">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login"
              ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
              :<p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
            }
          </form>
        </div>
      );
}

export default LoginPage

