import React, { useState } from "react";
import "./ProducerProfile.css";
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Input,
  Upload,
  message,
} from "antd";

import ProducerNavbar from "../producerNavbar/ProducerNavbar";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import imageSource from "../ProducerAccountPic/Group209.png";
import { useNavigate } from "react-router-dom";

function ProducerProfile() {
  // const [profileImage, setProfileImage] = useState('../ProducerAccountPic/Group209.png');
  const navigate = useNavigate("");
  const [visible, setVisible] = useState(false);
  const [editProfile, seteditProfile] = useState(false);
  const [form] = Form.useForm();
  const [instruction, setinstruction] = useState("");

  const send = (e) => {
    e.preventDefault();
    // setShow(true)
    setinstruction(
      "Lorem Ipsum is the standard filler text used in design throughout the world. It’s been the standards since the 1500’s and it’s time for an update."
    );
  };
  const handlecross = () => {
    setinstruction(false);
  };
  const showModal2 = () => {
    seteditProfile(true);
    console.log("set");
  };

  const hideModal = () => {
    seteditProfile(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
    hideModal();
  };
  return (
    <div>
      <ProducerNavbar image={imageSource} />

      <div
        className="ProducerProfile"
        style={{ padding: "40px", margin: "12px", background: "#4C68890D" }}
      >
        <div className="producerProfileflex">
          <Row gutter={13}>
            <Col xs={24} sm={5}>
            <Card onClick={showModal2}
            
  title={
    <EditOutlined
      // onClick={showModal2}
      style={{ cursor: "pointer" }}
    />
  }
  className="pen"
  type="inner"
  // onClick={gotoeditprofile}
>
                <div className="profilecard">
                  <img src={imageSource} alt="imageSource" />
                  <h3 style={{ textAlign: "center" }}>Jonathan Snow</h3>
                  <p>jonathan.s45@gmail.com</p>
                  <p>(319) 555-0115</p>
                  <Button type="default">CHANGE PASSWORD</Button>
                </div>
              </Card>
            </Col>
            <Modal
              // title="Edit Profile"
              title={<div className="custom-modal-title">Edit Profile</div>}
              open={editProfile}
              onCancel={hideModal}
              footer={null}
              width={500}
              height={100}
              style={{
                // background:'purple',
                borderRadius: 4,
              }}
            >
              <Form form={form} onFinish={onFinish}>
                <Upload
                  name="profileImage"
                  showUploadList={false}
                  customRequest={handleUpload}
                >
                  <div style={{ marginBottom: 20 }}>
                    {/* <img
                src={imageSource}
                alt="Profile"
                className='editprofiledp'
              /> */}
                    <div className="editprofiledp">
                      <EditOutlined
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          textAlign: "center",
                          marginTop: "30px",
                        }}
                      />
                    </div>
                  </div>
                </Upload>
                <div>
                  <div className="editprofileinput1 place">
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>FIRST NAME</label>
                      <input type="text" placeholder="Jonathan" />
                    </div>
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>LAST NAME</label>
                      <input type="text " placeholder="Snow" />
                    </div>
                  </div>
                  <div className="editprofileinput1 place">
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>PHONE NUMBER</label>
                      <input type="text" placeholder="(319) 555-0115" />
                    </div>
                    <div
                      className="editprofilenae"
                      style={{ textAlign: "start" }}
                    >
                      <label>EMAIL ADDRESS </label>
                      <input
                        type="text "
                        placeholder="jonathan.s45@gmail.com"
                      />
                    </div>
                  </div>

                  {/* <Button onClick={send} className='signbutton tel'>
Save changes
</Button>: */}
                  <Button className="signbutton tel">
                    <h4 className="changes">save changes</h4>
                  </Button>

                  {instruction ? (
                    <div className="instructionptag">
                      <p>{instruction}</p>
                      <Button onClick={handlecross}>Cancel</Button>
                    </div>
                  ) : (
                    <h3 className="wheel" onClick={send}>
                      <SettingOutlined
                        style={{
                          fontSize: "24px",
                          marginRight: "8px",
                          color: "#192E46",
                        }}
                      />
                      Need help?
                    </h3>
                  )}
                </div>
              </Form>
            </Modal>

            <Col xs={29} sm={16} className="part2">
              <Card
                title={
                  <div className="part">
                    <div className="active">
                      You have <span>2</span> active businesses
                    </div>
                    <div>
                      <Button
                        type="primary"
                        className=" btnpria "
                        onClick={showModal}
                      >
                        + Add Business
                      </Button>
                      <div className="Modal">
                        <Modal
                          className="cus"
                          title="Get started by creating your first business"
                          open={visible}
                          onCancel={handleCancel}
                          footer={[
                            <Button
                              key="skip"
                              onClick={handleCancel}
                              style={{ background: "#FB775A", color: "white" }}
                              className="Modalbtn"
                            >
                              + Add business
                            </Button>,
                            <Button
                              key="add"
                              type="primary"
                              onClick={handleCancel}
                              className="Modalbtn"
                              style={{ background: "white", color: "#4C6889" }}
                            >
                              Skip for Now{" "}
                            </Button>,
                          ]}
                        ></Modal>
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
                        <p style={{ fontSize: "19px" }}>Upper Crust Pizza</p>
                        <Button type="primary" className=" pri">
                          ➕
                        </Button>
                      </div>
                    }
                  >
                    <div className="cardagain">
                      <div className="cardflex">
                        <h5>NAME</h5>
                        <p>Miami</p>
                      </div>
                      <div className="cardflex">
                        <h5>DOMAIN</h5>
                        <p>../uppercrust/miami</p>
                      </div>
                      <div className="dashbtn">
                        <Button type="primary" className="dashbtn">
                          Dashboard &gt;
                        </Button>
                      </div>
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
                        <p style={{ fontSize: "19px" }}>Ideal Nutrition</p>
                        <Button type="primary" className=" pri">
                          ➕
                        </Button>
                      </div>
                    }
                  >
                    <div className="cardagain">
                      <div className="cardflex">
                        <h5>NAME</h5>
                        <p>Los Angeles</p>
                      </div>
                      <div className="cardflex">
                        <h5>DOMAIN</h5>
                        <p>../idealnutrition/losangeles</p>
                      </div>
                      <div className="dashbtn">
                        <Button type="primary" className="dashbtn">
                          Dashboard &gt;
                        </Button>
                      </div>
                    </div>
                    <div className="cardagain">
                      <div className="cardflex">
                        <h5>NAME</h5>
                        <p>San Diego</p>
                      </div>
                      <div className="cardflex">
                        <h5>DOMAIN</h5>
                        <p>../idealnutrition/losangeles</p>
                      </div>
                      <div className="dashbtn">
                        <Button type="primary" className="dashbtn">
                          Dashboard &gt;
                        </Button>
                      </div>
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
