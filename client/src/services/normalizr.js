import { schema } from 'normalizr'

export const toppingSchema = new schema.Entity(
  'topping',
  {},
  { idAttribute: '_id' }
)

export const arrayOfToppingSchema = new schema.Array(toppingSchema)

export const pizzaSchema = new schema.Entity(
  'pizza',
  {},
  { idAttribute: '_id' }
)

export const arrayOfPizzaSchema = new schema.Array(pizzaSchema)
