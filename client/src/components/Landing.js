import React from 'react'
import { Layout, Menu } from 'antd'

const { Content, Sider } = Layout

const Landing = () => {
  return (
    <Layout>
      <Sider width={200}>
        <Menu mode="inline" style={{ height: '100%' }}>
          <Menu.Item key="1">key1</Menu.Item>
          <Menu.Item key="2">key2</Menu.Item>
          <Menu.Item key="3">key3</Menu.Item>
          <Menu.Item key="4">key4</Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: '24px', background: '#fff' }}>CONTENT</Content>
    </Layout>
  )
}

export default Landing
