import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

class HeaderNav extends Component {
  renderContent() {
    const { auth } = this.props
    switch (auth) {
      case null:
        return
      case false:
        return (
          <li key="1">
            <a href="/auth/google" className="nav-link">
              Sign in with Google
            </a>
          </li>
        )
      default:
        return (
          <li key="1">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>
        )
    }
  }

  render() {
    return (
      <div className="header">
        <img src="http://via.placeholder.com/150x40?text=logo" alt="logo" />
        <ul>{this.renderContent()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(HeaderNav)
