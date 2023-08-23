import './homepage5.css'

// import './SignOne.css'
// import NAvbar from "../../navbar/NAvbar"
import home from "./Homepage5pic/homepage_5.png"
import Dots from "../../pic/Group211.png"
import Dot from './Homepage5pic/radio-right(4).png'
// import Dot from ""
// import Dot from "../pic/radio-right.png"

function Homepage5() {
  return (
    <>
    <div className='SignupOne'>
    {/* <NAvbar/> */}
        <div className='SignupOneflex'>
          <div className='Dots'><img src={Dots} alt='Dots' className='dots'/>
          </div>
            <div className='text'>
                <h2 className="Homepage5h2">Simplify your order management</h2>
     <p className="Homepage5p"><span>Cottage</span> processes your customer's orders and creates a list of menu items to be prepared, organized by day.</p>
     <h3>Payments are handled securely by <span> Stripe</span></h3>
            </div>              
                <img className="home" src={home} alt='ho' />
            <div className='dot'>
            <img src={Dot} alt='Dots' className='dot2' />
</div>
        </div>
    </div>
    </>
  )
}

export default Homepage5