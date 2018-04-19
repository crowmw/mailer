import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
const { Header } = Layout

class HeaderNav extends Component {
  renderContent() {
    const { auth } = this.props
    switch (auth) {
      case null:
        return
      case false:
        return (
          <Menu.Item key="1">
            <a href="/auth/google" className="nav-link">
              Sign in with Google
            </a>
          </Menu.Item>
        )
      default:
        return (
          <Menu.Item key="1">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </Menu.Item>
        )
    }
  }

  render() {
    return (
      <Header style={{ padding: '0 50px' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          {this.renderContent()}
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(HeaderNav)
