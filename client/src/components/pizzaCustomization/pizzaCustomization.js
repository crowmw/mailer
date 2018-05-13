import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrentSize } from '../../actions/index'

import { getCurrentPizzaSize } from '../../selectors/pizzaSelector'

import PizzaToppings from '../pizzaToppings/pizzaToppings'
import PizzaSize from '../pizzaSize/pizzaSize'
import './style.css'

export class PizzaCustomization extends Component {
  handleSizeChange = (e, size) => {
    console.log(e.currentTarget.value)
    this.props.updateCurrentSize(e.currentTarget.value)
  }

  render() {
    const { size } = this.props
    return (
      <div className="pizza-custom" style={{ padding: 6 }}>
        <PizzaSize onSizeChange={this.handleSizeChange} size={size} />
        <PizzaToppings />
        <button className="button button--primary">Add to cart</button>
        <button className="button button--secondary">Cancel</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  size: getCurrentPizzaSize(state)
})

const mapDispatchToProps = {
  updateCurrentSize
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCustomization)
