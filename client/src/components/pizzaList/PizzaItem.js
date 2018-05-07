import React from 'react'

import './style.css'

const PizzaItem = ({ id, name, description, price, onAddToCart }) => {
  price = [...price, 80]
  return (
    <li className="pizza-list__item" key={id}>
      <img
        className="pizza-list__item__image"
        src="http://via.placeholder.com/82x82?text=82_x_82"
        alt="pizza1"
      />
      <div className="pizza-list__item__header">{name}</div>
      <div className="pizza-list__item__content">
        Lorem Ipsum dolores adsdbasudbakushb
      </div>
      <div className="pizza-list__item__footer">
        <ul className="footer__price-list">
          {price.map((p, index) => (
            <li key={index} className="price-list__item">
              {p}
            </li>
          ))}
        </ul>
        <button
          className="pizza-list__item__footer__button"
          name="add-button"
          onClick={() => onAddToCart(id)}
        >
          Add to cart
        </button>
      </div>
    </li>
  )
}

export default PizzaItem
