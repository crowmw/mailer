import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './header/Header'
import PizzaList from './pizzaList/PizzaList'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
    // this.props.postPizza()
    this.props.fetchPizzas()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={PizzaList} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
