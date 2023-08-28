import React from 'react'
import './ProducerNavbar.css'
import logo from "../ProducerAccountPic/Group 46orange_logo.png"
import profile from "../ProducerAccountPic/Group 898.png"
import icon from "../ProducerAccountPic/Vector 8.png"
import { Menu, Dropdown } from 'antd';
import { DownOutlined,UserOutlined,QuestionCircleOutlined,LogoutOutlined   } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
function ProducerNavbar(props) {
  const menu = (
    <Menu className='drops'>
      <Menu.Item key="1" className='drop'>
        <UserOutlined/>
        Account</Menu.Item>
      <Menu.Item key="2"className='drop'><QuestionCircleOutlined />Help</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"className='drop'><LogoutOutlined />Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className='producerNavbar'>

    <div><img src={logo} alt='logo' className='logo'/></div>
    <div className='nextplz'>
        <Dropdown overlay={menu} trigger={['click']} >
        <a className="ant-dropdown-link icon" onClick={e => e.preventDefault()}>     
          <MenuOutlined style={{ marginLeft: '18px' }} />
        </a>
      </Dropdown>

      </div>
    <div className='next'><p>Sign in</p>
          <img src={props.image} alt="Child" className='profile'/>
        <Dropdown overlay={menu} trigger={['click']} >
        <a className="ant-dropdown-link icon" onClick={e => e.preventDefault()}>
       

          <DownOutlined style={{ marginLeft: '8px', fontSize:"2rem" ,fontWeight:"800",textAlign:'center',marginLeft:"1px"} } />
        </a>
      </Dropdown>

      </div>
</div>
  )
}

export default ProducerNavbar