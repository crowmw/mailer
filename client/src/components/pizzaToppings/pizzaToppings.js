import React, { Component } from 'react'
import { connect } from 'react-redux'

// import './style.css'
import { getToppingsArray } from '../../selectors/toppingSelector'

import { updateCurrentTopping } from '../../actions/index'
import PizzaTopping from './pizzaTopping'

class PizzaToppings extends Component {
  handleToppingClick = topping => {
    this.props.updateCurrentTopping(topping)
  }

  render() {
    return (
      <div className="toppings-container">
        <h2>Toppings</h2>
        <ul className="toppings">
          {this.props.toppings.map(id => <PizzaTopping id={id} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toppings: getToppingsArray(state)
  }
}

export default connect(mapStateToProps, { updateCurrentTopping })(PizzaToppings)
