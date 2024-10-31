import React, { useContext, useState} from 'react'
import './LoginPage.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';



const LoginPage = ({ setShowLogin }) => {

const {url} = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
    });
  
    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(prevData => ({ ...prevData, [name]: value }));
    };


    return (
        <div className='login-page'>
          <form className="login-page-container">
            <div className="login-page-title">
              <h2>{currState}</h2>
              <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-page-inputs">
            {currState === "Login" ? null : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
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

