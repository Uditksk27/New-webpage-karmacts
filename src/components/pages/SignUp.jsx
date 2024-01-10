import React from 'react';
import './SignUp.css';
import { useState } from 'react';

const SignUp = () => {

    const [action, setaction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>
                {action} 
            </div>
            <div className='underline'></div>
        </div>
        <div className="inputs">
            {action==="Login" ? <div></div> : <div className='input'>
                <img src='/person.png' alt=""/>
                <input type='text' placeholder='Name'/>
            </div> }
            
            <div className='input'>
                <img src='/email.png' alt=""/>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src='/password.png' alt=""/>
                <input type='password' placeholder='Password'/>
            </div>

        </div>
        {action==="Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" : "submit"} 
            onClick={()=>{setaction('Sign Up')}}>Sign Up</div>
            <div className={action==="Sign Up" ? "submit gray" : "submit"}
            onClick={()=>setaction('Login')}>Log In</div>
        </div>
    </div>
  )
}

export default SignUp