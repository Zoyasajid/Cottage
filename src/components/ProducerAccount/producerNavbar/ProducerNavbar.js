import React from 'react'
import './ProducerNavbar.css'
import logo from "../ProducerAccountPic/Group 46orange_logo.png"
import profile from "../ProducerAccountPic/Group 898.png"
import icon from "../ProducerAccountPic/Vector 8.png"
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
function ProducerNavbar() {
  const menu = (
    <Menu className='drops'>
      <Menu.Item key="1" className='drop'>Profile</Menu.Item>
      <Menu.Item key="2"className='drop'>Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"className='drop'>Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className='producerNavbar'>

    <div><img src={logo} alt='logo' className='logo'/></div>
    <div className='nextplz'>
        <Dropdown overlay={menu} trigger={['click']} >
        <a className="ant-dropdown-link icon" onClick={e => e.preventDefault()}>
          {/* Your profile icon, for example */}
          {/* <img src={profile} alt='profile' className='profile'/> */}
          <MenuOutlined style={{ marginLeft: '18px' }} />
        </a>
      </Dropdown>

      </div>
    <div className='next'><p>Sign in</p>
        <Dropdown overlay={menu} trigger={['click']} >
        <a className="ant-dropdown-link icon" onClick={e => e.preventDefault()}>
          {/* Your profile icon, for example */}
          <img src={profile} alt='profile' className='profile'/>
          <DownOutlined style={{ marginLeft: '8px' }} />
        </a>
      </Dropdown>

      </div>
</div>
  )
}

export default ProducerNavbar