import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

class PizzaList extends Component {
  listRenderer = () => {
    const { pizzas } = this.props
    if (pizzas) {
      return Object.values(pizzas).map(pizza => (
        <li key={pizza._id}>
          {pizza.name} - {pizza.price}
        </li>
      ))
    }
  }

  render() {
    return <ul className="pizza-list">{this.listRenderer()} </ul>
  }
}

const mapStateToProps = ({ pizzas }) => {
  return {
    pizzas
  }
}

export default connect(mapStateToProps)(PizzaList)
