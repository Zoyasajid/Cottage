import React from 'react'
import './Footer.css'
import logo from './footerpic/LOGO (2).png'
import { TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div className='footermain'>
    <div className='Footer'>
        <div className='footerlogo'>
            <img src={logo} alt='logo' className='footerlogopic'/>
             </div>
        <div className='footersec'>
            <h4>About Us</h4>
            <h4>Help</h4>
        </div>
        <div className='footerthird'>
            <h4>Sign in</h4>
            <h4 style={{color:"#FB775A"}}>Register</h4>
        </div>
        <div className='footerfour'>
            <h4>Terms & Conditions</h4>
            <h4>Privacy</h4>
        </div>
    </div>
    <div className='footermaintwo'>
        <div className='footercopyright'>
<p>2020 Cottage. All rights reserved.</p>
        </div>
        <div className='footericon'>
      <InstagramOutlined style={{ fontSize: '30px', marginRight: '10px' }} />
        <TwitterOutlined style={{ fontSize: '30px', marginRight: '10px' }} />
      <FacebookOutlined style={{ fontSize: '30px' }} />        </div>
    </div>
    </div>
  )
}

export default Footer