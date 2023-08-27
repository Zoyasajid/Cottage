import React,{useState} from "react";
import "./ProducerProfile.css";
import { Card, Row, Col, Button ,Modal } from "antd";

import ProducerNavbar from "../producerNavbar/ProducerNavbar";
import { EditOutlined } from "@ant-design/icons";
function ProducerProfile() {
  // const [profileImage, setProfileImage] = useState('../ProducerAccountPic/Group209.png');

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (

    <div>
      <ProducerNavbar />
      {/* <ProducerNavbar  profile={profileImage}/> */}
      {/* {profileImage} */}
      <div
        className="ProducerProfile"
        style={{ padding: "40px", margin: "12px", background: "#4C68890D" }}
      >
        <div className="producerProfileflex">
          <Row gutter={13}>
            <Col xs={24} sm={5}>
              <Card title={<EditOutlined />} className=" pen" type="inner">
                <div className="profilecard">
                  <img src={require("../ProducerAccountPic/Group209.png")} />
                  <h3 style={{ textAlign: "center" }}>Jonathan Snow</h3>
                  <p>jonathan.s45@gmail.com</p>
                  <p>(319) 555-0115</p>
                  <Button type="default" >CHANGE PASSWORD</Button>
                </div>
              </Card>
            </Col>

            <Col xs={29} sm={16} className="part2" >
              <Card

                title={
                  <div className="part">
                    <div className="active">
                      You have <span>2</span> active businesses
                    </div>
                    <div>
                      <Button type="primary" className=" btnpria " onClick={showModal}>
                        + Add Business
                      </Button>
                      <div className="Modal">
                        
                      <Modal
                      className="cus"
        title="Get started by creating your first business"
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="skip" onClick={handleCancel}style={{ background: "#FB775A",color:"white" }} className="Modalbtn">
           + Add business
          </Button>,
          <Button key="add" type="primary" 
          onClick={handleCancel}className="Modalbtn" style={{ background: "white",color:"#4C6889" }} >
Skip for Now          </Button>,
        ]}
      >
     
      </Modal>
                      </div>
                     
                    </div>
                  </div>
                }
                className="rightcard"
              >
                <div className="cards2">
                  <Card
                    type="inner"
                    title={
                      <div className="local">
                        <p style={{ fontSize: "19px" }}>
                       Upper Crust Pizza
                        </p>
                        <Button type="primary" className=" pri">
                          ➕
                        </Button>
                      </div>
                    }
                  >
               
                    <div  className="cardagain">
                    <div className="cardflex">
                      <h5>NAME</h5>
                      <p>Miami</p>

                    </div>
                    <div className="cardflex" >
                    <h5>DOMAIN</h5>
                      <p>../uppercrust/miami</p>
                      </div>
                      <div className="dashbtn"><Button type="primary" className="dashbtn">
                        Dashboard  &gt;
                      </Button></div>
                      
                    </div>
                  </Card>
                </div>
                <div className="cards2">
                  <Card
                    type="inner"
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          height: "60px",
                          alignItems: "center",
                          fontWeight: "700",
                        }}
                      >
                        <p style={{ fontSize: "19px" }}>
                         Ideal Nutrition
                        </p>
                        <Button type="primary" className=" pri">
                          ➕
                        </Button>
                      </div>
                    }
                  >
                    <div  className="cardagain">
                    <div className="cardflex">
                      <h5>NAME</h5>
                      <p>Los Angeles</p>

                    </div>
                    <div className="cardflex" >
                    <h5>DOMAIN</h5>
                      <p>../idealnutrition/losangeles</p>
                      </div>
                      <div className="dashbtn"><Button type="primary" className="dashbtn">
                        Dashboard  &gt;
                      </Button></div>
                      
                    </div>
                    <div  className="cardagain">
                    <div className="cardflex">
                    <h5>NAME</h5>
                      <p>San Diego</p>

                    </div>
                    <div className="cardflex" >
                      <h5>DOMAIN</h5>
                      <p>../idealnutrition/losangeles</p>
                      </div>
                      <div className="dashbtn"><Button type="primary" className="dashbtn">
                        Dashboard  &gt;
                      </Button></div>
                      
                    </div>
                  </Card>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProducerProfile;
