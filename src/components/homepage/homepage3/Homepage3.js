// import './homepage3.css'

// import './SignOne.css'
import NAvbar from "../../navbar/NAvbar"
import home from "./homepage3pic/homepage_3.png"
import Dots from "../../pic/Group211.png"
import Dot from './homepage3pic/radio-right(2).png'
// import Dot from ""
// import Dot from "../pic/radio-right.png"

function Homepage3() {
  return (
    <>
    <div className='SignupOne'>
    {/* <NAvbar/> */}
        <div className='SignupOneflex'>
          <div className='Dots'><img src={Dots} alt='Dots' className='dots'/>
          </div>
            <div className='text'>
                <h2>Meal plans are easy to manage</h2>
<p>Cottage lets your customers buy meals from you one at a time, or buy meal plans from you. When customers sign up for one of your plans, Cottage will keep track of which plan they have and how much of it they've used. At checkout time, customers will automatically have their plan applied to their purchases.</p>       
     {/* <button className='btn1'>GET STARTED</button> */}
            {/* <button className='btn2'>LEARN MORE</button> */}
            </div>
            {/* <div className='pic-dot'> */}
              
                <img className="home" src={home} alt='ho' />
            <div className='dot'>
            <img src={Dot} alt='Dots' className='dot2' />
</div>
{/* </div> */}

        </div>
    </div>
    </>
  )
}

export default Homepage3