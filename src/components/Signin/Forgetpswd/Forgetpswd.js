import React, { useState } from 'react'
import logo from './Forgetpic/LOGO (1).png'
import './Forgetpswd.css'
import {useNavigate } from 'react-router-dom';
function Forgetpswd() {

    const navigate=useNavigate('')
    const signin=()=>{
        navigate('/signin')
    }
    const signup=()=>{
        navigate('/signup')
    }
    const [instruction,setinstruction]= useState('')
    // const [show ,setShow]=useState(true)
  const handlecross=()=>{
         setinstruction(false)
    }
    const send=(e)=>{
    e.preventDefault();
    // setShow(true)
    setinstruction("If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes")
}
  return (
    <div className='forgetpswd'> 
    <div className='forget'>
    <div className='forgetlogo'><img src={logo} alt='logo'/></div>
    <div className='forgetform'>
    
<div className='formforget'>
<h2>Forget Password</h2>
<input type='text' placeholder='Email Address'/>
{instruction ? (
                            <div>
                                <button onClick={handlecross}>Cancel</button>
                                <p>{instruction}</p>
                            </div>
                        ) : (
                            <button onClick={send}>Send Instruction</button>
                        )}
    {/* </div> */}
{/* {instruction} */}
<div className='forgetlist'>
    <h3 onClick={signin}>Sign In</h3>
    <h3 onClick={signup}>Create Account</h3>
    <h3 onClick={send}>Didn’t receive unlock instruction?</h3>
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Forgetpswd