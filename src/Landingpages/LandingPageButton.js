import { Button } from "antd";
import React from "react";
import './LandingpageButton.css'
function LandingPageButton({ title, bgclr, textColor }) {

  return (
    <>
      <Button className="landingpagebtn"
        style={{
          backgroundColor: [bgclr],
          color :[textColor],
          // fontSize: "18px",
          // fontWeight: 600,
          // color: textColor,
          // lineHeight: "28px",
          // margin: "4px",
          // border:"2px solid grey",
          // marginTop: "29px",
          // letterSpacing: "0.02em",
          // width: "250px",
          // height: "50px",
          // textAlign: "center",
        }}
      >
        {title}
      </Button>
    </>
  );
}

export default LandingPageButton;
