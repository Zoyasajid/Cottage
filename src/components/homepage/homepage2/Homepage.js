import React from 'react'
import '../homepage2/homepage.css'
import NAvbar from '../../navbar/NAvbar'
import list from "./pics/homepage_2.png"
import dots from "./pics/Group211.png"
import dot from "./pics/radio-right(1).png"
function Homepage() {
  return (
    <div>
        <div className='homepage2'>
        {/* <NAvbar/> */}
            <div className='homepageflex'>
                <div>
<img src={list} alt='list' className='list'/>
</div>
<div className='homepage2text'>
    <h2>Offer your menu the way you want</h2>
    <p>Use <span>Cottage</span>to set up a menu and decide which items are available on which days. Create different locations for your meal prep company to manage them separately. Offer your customers discount codes with a few clicks.</p>
</div>
<div className='homepage2dots'>
    <img src={dots} alt='dots'/>
</div>
<div>
    <img src={dot} alt='dots' className='homepage2dot'/>
</div>
        </div>
        </div>
    </div>
  )
}

export default Homepage