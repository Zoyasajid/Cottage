import React,{useState} from 'react'
import './Verify.css'
import { useNavigate } from 'react-router-dom'
import logo from '../pic/LOGO (1).png'
function Verify() {
    const navigate = useNavigate("")
    const [instruction,setinstruction]= useState('')

    const send=(e)=>{
        e.preventDefault();
        // setShow(true)
        setinstruction("Code did not match, please try again")
    }
    const handlecross=()=>{
         setinstruction(false)
    }
    const askquestion=()=>{
        navigate('/question')
    }
    return (
        <div className='forgetpswd'> 
        <div className='forget'>
        <div className='forgetlogo'><img src={logo} alt='logo'/></div>
        <div className='forgetform'>
        
    <div className='formforget part2 '>
    <h2>Verification Code</h2>
    <div className='forgetlist list2'>
    We emailed you a six-digit code to
    <h4>randommail@mail.com</h4>
Enter the code below to confirm your email address.

    </div>
    <div className='ib'>
    <input type='text' placeholder='Your one time six-digit code'/>
    
    {instruction ? (
                            <div>
                                <button onClick={handlecross}>Cancel</button>
                                <p>{instruction}</p>
                            </div>
                        ) : (
                            <button onClick={send}>Send Instruction</button>
                        )}
    </div>

    <h5 className='verifyh5'>Question? <span onClick={askquestion}>We are here to help</span></h5>
    </div>

        </div>
        </div>
        </div>
      )  
}

export default Verify