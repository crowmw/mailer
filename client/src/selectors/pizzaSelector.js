import { createSelector } from 'reselect'

export const getPizzaEntities = state => state.pizza.entities

export const getCurrentPizzaSize = state => state.pizza.current.size

export const getCurrentPizzaId = state => state.pizza.current.pizza

export const getCurrentPizzaToppings = state => state.pizza.current.toppings

export const getCurrentPizzaEntity = state => {
  const currentPizzaId = getCurrentPizzaId(state)
  const pizzaEntities = getPizzaEntities(state)
  return pizzaEntities && pizzaEntities[currentPizzaId]
}

export const getCurrentPizzaDefaultTopping = createSelector(
  getCurrentPizzaEntity,
  entity => {
    if (entity && entity.toppings) {
      const toppings = entity.toppings.reduce((obj, item) => {
        obj[item._id] = item
        return obj
      }, {})

      return toppings
    }
  }
)
