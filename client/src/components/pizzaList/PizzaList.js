import React, { Component } from 'react'
import { connect } from 'react-redux'

import PizzaItem from './PizzaItem'
import './style.css'

class PizzaList extends Component {
  handleAddToCart = pizza => {
    console.log(pizza)
  }

  listRenderer = () => {
    const { pizzas } = this.props
    if (pizzas) {
      return Object.values(pizzas).map(pizza => (
        <PizzaItem
          key={pizza._id}
          id={pizza._id}
          name={pizza.name}
          price={pizza.price}
          onAddToCart={this.handleAddToCart}
        />
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
