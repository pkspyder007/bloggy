import React from 'react'

import { Layout, Breadcrumb } from 'antd';

import UserSidebar from '../components/user/sidebar';
import ProfileCard from '../components/user/profilecard';

const { Content } = Layout;


export default function UserProfile() {
  return (
    <div>
      <Layout>
    <Layout>
     <UserSidebar />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <ProfileCard />
        </Content>
      </Layout>
    </Layout>
  </Layout>      
    </div>
  )
}
