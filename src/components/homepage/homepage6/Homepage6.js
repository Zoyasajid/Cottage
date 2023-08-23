import React from 'react'
import './Homepage.css'
// import NAvbar from '../../navbar/NAvbar'
import pic from "../homepage6/Homepage6pic/homepage_6.png"
import pic2 from "../homepage6/Homepage6pic/radio-right.png"

function Homepage6() {
  return (
    <>
    <div className='Homepage6'>
    <div className='Homepage6flex'>
    <div className='Homepage6text'>
      <h2>Track your business performance</h2>
      <p>Use <span>Cottage</span> reports to figure out which menu items are selling the best and who your most frequent customers are</p>
    <button>GET STARTED</button>
    <div className='Homepage6pic'><img src={pic} alt='pic'/></div>
    
    </div>
    <div className='Homepage6pic2'><img src={pic2} alt='pic'/></div>
    </div>
    </div>
    </>
  )
}

export default Homepage6