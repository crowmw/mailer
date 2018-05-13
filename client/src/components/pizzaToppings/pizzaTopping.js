import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getToppingName,
  getCurrentToppingAmount
} from '../../selectors/toppingSelector'
import './style.css'

const amountStyleClass = amount => {
  switch (amount) {
    case 1:
      return 'topping--one'
    case 2:
      return 'topping--two'
    default:
      return ''
  }
}

export class PizzaTopping extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    amount: PropTypes.number
  }

  render() {
    const { id, name, amount } = this.props
    return (
      <li key={id} className={`topping ${amountStyleClass(amount)}`}>
        <div className="topping__image" />
        <div className="topping__name">{name}</div>
        <div className="topping__amount">{amount}</div>
      </li>
    )
  }
}

const mapStateToProps = (state, props) => ({
  name: getToppingName(state, props.id),
  amount: getCurrentToppingAmount(state, props.id)
})

export default connect(mapStateToProps)(PizzaTopping)
