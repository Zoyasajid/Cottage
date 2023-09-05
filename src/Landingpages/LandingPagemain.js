// import React, { useState } from 'react'
import Data from "./LandingPage/LandingPageData";
import dots from "./Landingpagepic/Group 211.png";
import "./Landingpage.css";
// import NAvbar from '../components/navbar/NAvbar'
// function LandingPagemain() {
//     const [dataVal,setDataval]=useState(Data)
//     console.log(dataVal)

//   return (
//   <div className='LandingPage'>

//     {dataVal?.map((data) => (
//         <div key={data.Id} className='item'>
//             <NAvbar/>
// <div>
//          <img src={dots} alt="Homepage" className='landingpagedots'/>

// </div>
//            <img src={data.image} alt={data.title} className='landingpic' />
//            <div className='datavaltext'>
//            <h3>{data.title}</h3>
//  <p>{data.description}</p>
//  </div>
//       </div>
//       ))}
//     </div>
//   )
// }
// export default LandingPagemain

import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import NAvbar from "../components/navbar/NAvbar";
import LandingPageButton from "./LandingPageButton";
// import 'fullpage.js/vendors/scrolloverflow'

class LandingPagemain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVal: Data,
    };
  }

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    const { dataVal } = this.state;
    console.log(dataVal);
    return (
      <>
        <NAvbar />
        <ReactFullpage
          navigation={true}
          //   licenseKey: ('YOUR_KEY_HERE')
          scrollOverflow={false}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <>
                {/* <NAvbar/> */}

                <ReactFullpage.Wrapper>
                  {/* <div className={dataVal ? (dataVal.length % 2 === 0 ? 'column-container' : 'reverse-column-container') : ''}> */}
                  {/* <div className="container"> */}
                  {dataVal?.map((data,index) => (
                 
                      <div className="section">
                        <div key={data.Id} className=" item" >
                         
                          <div>
                            <img
                              src={data.image}
                              alt={data.title}
                              className="landingpic"
                            />
                          </div>
                          
                          <div className="datavaltext">

                            <h3>{data.title}</h3>
                            <p className="landingtextp">{data.description}</p>
                            {data.button ? (
                              <LandingPageButton
                                title={data.button}
                                bgclr="#FB775A"
                                textColor={"white"}
                              />
                            ) : null}
                            {data.button2 ? (
                              <LandingPageButton title={data.button2} />
                            ) : null}
                          </div>
                          <div className="landingpagedots">
                            <img src={dots} className="dott" />
                          </div>
                        </div>
                      </div>
                   
                  ))}
                  {/* </div> */}
                </ReactFullpage.Wrapper>
              </>
            );
          }}
        />
      </>
    );
  }
}
export default LandingPagemain;
