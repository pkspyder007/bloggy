import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Layout} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './usersidebar.css'

const {  Sider } = Layout;
const { SubMenu } = Menu;

export default function UserSidebar() {
  return (
    <div>
       <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Posts">
            <Menu.Item key="1"><Link to="/user">All Posts</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/user/post/new">New Posts</Link></Menu.Item>
            <Menu.Item key="3">Edit Post</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Comments">
            <Menu.Item key="5">All Comments</Menu.Item>
            <Menu.Item key="6">Recent Comments</Menu.Item>
            <Menu.Item key="7">Verify Comments</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Profile">
            <Menu.Item key="9">Upadte</Menu.Item>
            <Menu.Item key="10">View</Menu.Item>
            <Menu.Item key="11">Analytics</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  )
}
