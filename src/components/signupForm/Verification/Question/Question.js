import React, { useState } from "react";
import "./Question.css";
// import
// import logo from '../pic/LOGO (1).png'
import logo from "../../pic/LOGO (1).png";
import NAvbar from "../../../navbar/NAvbar";
function Question() {
  return (
    <div className="forgetpswd questionspage">
      <NAvbar />
      <div className="forget questionsquestion">
        <div className="forgetlogo">
          <h3 className="questionsh3">Have a question?</h3>
        </div>
        <div className="forgetform questionsupper">
          <div className="formforget part2 " style={{ height: "55vh" }}>
            <div className="forgetlist list2"></div>
            <div className="ib ">
              <div className="questioninputs">
                <div className="questioninput2">
                  <input type="text" placeholder="First Name" style={{  border: "1px solid #E0E4E9"
}} />
                </div>
                <div className="questioninput2">
                  <input type="text" placeholder="First Name"  style={{  border: "1px solid #E0E4E9"
}}/>
                </div>
              </div>
              <div className="quesop">
                <input
                  type="text"
                  placeholder="Email Address"
                  style={{
                    width: "93%",
                    margin: "15px",
                    // border: "1px solid #E0E4E9",
                    border: "1px solid #E0E4E9"

                  }}
                />
                <input
                  type="text"
                  placeholder="How can we Help you?"
                  className="quesinput"
                  style={{
                    width: "93%",
                    margin: "15px",
                    marginTop: "2px",
                    height: "20vh",
                    paddingTop: " 5px", // Adding padding to adjust text alignment
                    // textAlign: "start",
                    border: "1px solid #E0E4E9"
                  }}
                />
              </div>

              <button
                className="signbutton "
                style={{ width: "93%", margin: "10px", marginLeft: "13px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
