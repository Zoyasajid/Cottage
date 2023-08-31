import React from 'react'
// import Dots from '../Dots/Dots'
// import Dots2 from '../Dots/Dots2'
import './SignOne.css'
// import NAvbar from "../../navbar/NAvbar"
import home from "../../pic/homepage_1.png"
import Dots from "../../pic/Group211.png"
import Dot from '../../pic/radio-right.png'
// import Dot from ""
// import Dot from "../pic/radio-right.png"

function SignupOne() {
  return (
    <>
    {/* <NAvbar/> */}
    <div className='SignupOne'>
        <div className='SignupOneflex'>
          <div className='Dots'><img src={Dots} alt='Dots' className='dots'/>
          </div>
            <div className='text'>
              <h2>Take your meal prep company to the next level</h2>
              <p><span>Cottage</span> will help you reach more customers and simplify managing your site, your menus, and your orders, letting you focus on delivering great food.</p>
            <button className='btn1'>GET STARTED</button>
            <button className='btn2'>LEARN MORE</button>
            </div>
            {/* <div className='pic-dot'> */}
              
                <img className="home" src={home} alt='ho' />

{/* </div> */}

        </div>
    </div>
    </>
  )
}

export default SignupOne