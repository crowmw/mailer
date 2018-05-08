import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './header/Header'
import PizzaList from './pizzaList/PizzaList'
import Toppings from './toppings/Toppings'

class App extends Component {
  componentDidMount() {
    // this.props.postPizza()
    this.props.fetchUser()
    this.props.fetchPizzas()
    this.props.fetchToppings()
    // this.props.postTopping()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={PizzaList} />
          <Route exact path="/toppings" component={Toppings} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
