import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'

const { Content, Footer } = Layout
class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
    // this.props.postPizza()
    this.props.fetchPizzas()
  }

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <BrowserRouter>
          <div>
            <Header />
            <Content style={{ padding: '25px 50px' }}>
              <Route exact path="/" component={Landing} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              sample-app @2018 Created by Mateusz Woźniak
            </Footer>
          </div>
        </BrowserRouter>
      </Layout>
    )
  }
}

export default connect(null, actions)(App)
