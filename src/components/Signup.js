// import React from 'react'
// import NAvbar from './navbar/NAvbar'
// import SignupOne from './homepage/SignupPage1/SignupOne'
// import Homepage from "../components/homepage/homepage2/Homepage"
// import Homepage3 from "../components/homepage/homepage3/Homepage3"
// import Homepage4 from './homepage/Homepage4/Homepage4'
// import Homepage5 from '../components/homepage/homepage5/Homepage5'
// import Homepage6 from '../components/homepage/homepage6/Homepage6'
// import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
// function Signup() {
//   const slides: ISlideConfig [] = [
//     {
//         content: <div><SignupOne/>
//         </div>,
     
//     },
//     {
//         content: <div><Homepage/></div>,
     
//     },
//     {
//         content: <div><Homepage3/></div>,
      
//     },
//     {
//         content: <div><Homepage4/></div>,
      
//     },
//     {
//         content: <div><Homepage5/></div>,
      
//     },
//     {
//         content: <div><Homepage6/></div>,
      
//     },
// ];
//   return (
// <>

//   <NAvbar/>

// <PageSlides
//             enableAutoScroll={true}
//             transitionSpeed={1000}
//             slides={slides}
//             parallax={{
//                 offset: 0.6,
//                 type: SlideParallaxType.reveal
//             }}
//         />
 
// </>  )
// }

// export default Signup

/* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow";
// import ReactFullpage from "@fullpage/react-fullpage";

// class signup extends React.Component {
//   onLeave(origin, destination, direction) {
//     console.log("Leaving section " + origin.index);
//   }
//   afterLoad(origin, destination, direction) {
//     console.log("After load: " + destination.index);
//   }
//   render() {
//     return (
//       <ReactFullpage
//         scrollOverflow={true}
//         navigation={true}
//         sectionsColor={["orange", "purple", "green"]}
//         onLeave={this.onLeave.bind(this)}
//         afterLoad={this.afterLoad.bind(this)}
//         render={({ state, fullpageApi }) => {
//           return (
//             <div id="fullpage-wrapper">
//               <div className="section section1">
//                 <h3>Section 1</h3>
//               </div>
//               <div className="section">
//                 <div className="slide">
//                   <h3>Slide 2.1</h3>
//                 </div>
//                 <div className="slide">
//                   <h3>Slide 2.2</h3>
//                 </div>
//                 <div className="slide">
//                   <h3>Slide 2.3</h3>
//                 </div>
//               </div>
//               <div className="section">
//                 <h3>Section 3</h3>
//                 <button onClick={() => fullpageApi.moveTo(1, 0)}>
//                   Move top
//                 </button>
//               </div>
//             </div>
//           );
//         }}
//       />
//     );
//   }
// }

// // ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

// export default signup;

import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Homepage from "../components/homepage/homepage2/Homepage";
import Homepage3 from "../components/homepage/homepage3/Homepage3";
import Homepage4 from "./homepage/Homepage4/Homepage4";
import Homepage5 from "../components/homepage/homepage5/Homepage5";
import SignupOne from './homepage/SignupPage1/SignupOne'
import '../components/style.css'
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import Homepage6 from "../components/homepage/homepage6/Homepage6";
import NAvbar from "./navbar/NAvbar";
class Signup extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (


<>
<NAvbar/>
     <ReactFullpage 
        navigation={true}
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
              <div className="section">
                <SignupOne />
              </div>
              <div className="section">
                <Homepage />
              </div>
              <div className="section">
                <Homepage3 />
              </div>
              <div className="section">
                <Homepage4 />
              </div>
              <div className="section">
                <Homepage5 />
              </div>
              <div className="section">
                <Homepage6 />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    );
  }
}

export default Signup;
