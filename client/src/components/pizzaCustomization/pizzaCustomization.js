import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PizzaSize } from '../pizzaSize/pizzaSize'
import { changeCurrentSize } from '../../actions/index'

export class PizzaCustomization extends Component {
  handleSizeChange = (e, size) => {
    console.log(e.currentTarget.value)
    this.props.changeCurrentSize(e.currentTarget.value)
  }

  render() {
    const { size } = this.props
    return (
      <div className="pizza-custom">
        PizzaCustomization
        <PizzaSize onSizeChange={this.handleSizeChange} size={size} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  size: state.pizza.current.size
})

const mapDispatchToProps = {
  changeCurrentSize
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCustomization)
