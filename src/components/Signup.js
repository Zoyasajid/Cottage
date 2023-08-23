import React from 'react'
import NAvbar from './navbar/NAvbar'
import SignupOne from './homepage/SignupPage1/SignupOne'
import Homepage from "../components/homepage/homepage2/Homepage"
import Homepage3 from "../components/homepage/homepage3/Homepage3"
import Homepage4 from './homepage/Homepage4/Homepage4'
import Homepage5 from '../components/homepage/homepage5/Homepage5'
import Homepage6 from '../components/homepage/homepage6/Homepage6'
import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
function Signup() {
  const slides: ISlideConfig [] = [
    {
        content: <div><SignupOne/>
        </div>,
     
    },
    {
        content: <div><Homepage/></div>,
     
    },
    {
        content: <div><Homepage3/></div>,
      
    },
    {
        content: <div><Homepage4/></div>,
      
    },
    {
        content: <div><Homepage5/></div>,
      
    },
    {
        content: <div><Homepage6/></div>,
      
    },
];
  return (
<>
{/* <NAvbar/> */}
{/* <div className='all'>
  <NAvbar/> */}
  <NAvbar/>

<PageSlides
            enableAutoScroll={true}
            transitionSpeed={1000}
            slides={slides}
            parallax={{
                offset: 0.6,
                type: SlideParallaxType.reveal
            }}
        />
        {/* </div> */}
{/* <div className='all'>
<NAvbar/>
<SignupOne/>
<Homepage/>
<Homepage3/>
<Homepage4/>
<Homepage5/>
<Homepage6/>
</div> */
}
</>  )
}

export default Signup


