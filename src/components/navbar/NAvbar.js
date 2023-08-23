import React from 'react'
import './navbar.css';
import { useNavigate} from 'react-router-dom';
import logo from "../pic/Logofigma.png"
function NAvbar() {
  const navigate= useNavigate('')
  const signup=()=>{
    navigate('/signup')
}
  return (
    <div className='navbar'>
<img src={logo} alt='logo' className='logo'/>
<button onClick ={signup} className='navbtn'>Signup</button>
    </div>
  )
}

export default NAvbar