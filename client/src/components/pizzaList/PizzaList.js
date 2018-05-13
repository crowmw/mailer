import React, { Component } from 'react'
import { connect } from 'react-redux'

import PizzaItem from './PizzaItem'
import './style.css'
import { getPizzaEntities } from '../../selectors/pizzaSelector'
import { updateCurrentPizza } from '../../actions/index'

class PizzaList extends Component {
  handleAddToCart = pizza => {
    this.props.updateCurrentPizza(pizza)
    this.props.history.push('/pizza/customization')
  }

  listRenderer = () => {
    const { pizzas } = this.props
    if (pizzas) {
      return Object.values(pizzas).map(pizza => (
        <PizzaItem
          key={pizza._id}
          id={pizza._id}
          {...pizza}
          onAddToCart={this.handleAddToCart}
        />
      ))
    }
  }

  render() {
    return <ul className="pizza-list">{this.listRenderer()} </ul>
  }
}

const mapStateToProps = state => {
  return {
    pizzas: getPizzaEntities(state)
  }
}

export default connect(mapStateToProps, { updateCurrentPizza })(PizzaList)
