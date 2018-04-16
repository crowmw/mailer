import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent() {
    const { auth } = this.props
    switch (auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in with Google</a>
          </li>
        )
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Mailer
          </Link>
          <ul className="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)
