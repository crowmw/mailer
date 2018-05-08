import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const sizeNames = [
  'pizza-size__image--small',
  'pizza-size__image--medium',
  'pizza-size__image--big',
  'pizza-size__image--mega'
]

export const PizzaSize = ({ size, onSizeChange }) => {
  return (
    <div className="pizza-size">
      <div className={`pizza-size__image ${sizeNames[size]}`} />
      <input
        className="pizza-size__slider"
        type="range"
        min={0}
        max={3}
        step={1}
        value={size}
        onChange={onSizeChange}
      />
    </div>
  )
}

PizzaSize.propTypes = {
  onSizeChange: PropTypes.func.isRequired,
  size: PropTypes.number
}
