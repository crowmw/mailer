import { createSelector } from 'reselect'
import {
  getCurrentPizzaDefaultTopping,
  getCurrentPizzaToppings
} from './pizzaSelector'

export const getToppingEntities = state => state.topping.entities

export const getTopping = (state, id) => {
  const entities = getToppingEntities(state)
  return entities && entities[id]
}

export const getToppingsArray = state => {
  const toppingsEntities = getToppingEntities(state)
  return toppingsEntities && Object.keys(toppingsEntities)
}

export const getToppingName = (state, id) => {
  const entity = getTopping(state, id)
  return entity && entity.name
}

export const getCurrentToppingAmount = (state, id) => {
  const currentPizzaDefaultToppings = getCurrentPizzaDefaultTopping(state)
  return currentPizzaDefaultToppings
    ? currentPizzaDefaultToppings[id]
      ? currentPizzaDefaultToppings[id].amount
      : 0
    : 0
}

export const getSelectedToppings = createSelector(
  [getToppingEntities, getCurrentPizzaDefaultTopping, getCurrentPizzaToppings],
  (entities, defaultTopping, currentToppings) => {
    let toppings = {}
    for (var top of Object.values(entities)) {
      toppings[top._id] = {
        name: top.name,
        amount: 0,
        type: top.type,
        _id: top._id
      }
    }

    let result = { ...toppings, ...defaultTopping }

    for (var t of Object.values(currentToppings)) {
      var amount = result[t._id].amount + t.amount

      if (amount > 2) {
        result[t._id].amount = 0
      } else {
        result[t._id].amount = amount
      }
    }

    return result ? Object.values(result) : []
  }
)
