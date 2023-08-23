
import '../homepage2/homepage.css'
import NAvbar from '../../navbar/NAvbar'
import list from "./homepage4pic/homepage_4.png"
import dots from "../../pic/Group211.png"
import dot from "./homepage4pic/radio-right(3).png"
function Homepage4() {
  return (
    <div>
        <div className='homepage2'>
        {/* <NAvbar/> */}
            <div className='homepageflex'>
                <div>
<img src={list} alt='list' className='list'/>
</div>
<div className='homepage2text'>
<h2>Schedule your menu items </h2>
<p>
    Use Cottage whether you're an occasional meal prep company or a multi-location enterprise, you can use schedules to make menu items only available on certain days. Also use schedules to set a deadline for ordering.</p>
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

export default Homepage4