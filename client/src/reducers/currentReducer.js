import { combineReducers } from 'redux'
import {
  UPDATE_CURRENT_SIZE,
  UPDATE_CURRENT_PIZZA,
  UPDATE_CURRENT_TOPPING
} from '../actions/types'

const initialState = {
  pizza: null,
  size: 2,
  toppings: {}
}

export const pizza = (state = initialState.pizza, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PIZZA:
      return action.payload
    default:
      return state
  }
}

export const size = (state = initialState.size, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SIZE:
      return action.payload
    default:
      return state
  }
}

export const toppings = (state = initialState.toppings, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_TOPPING:
      var { topping } = action.payload
      if (state[topping]) {
        return state[topping].amount === 2
          ? {
              ...state,
              [topping]: { ...state[topping], amount: 0 }
            }
          : {
              ...state,
              [topping]: {
                ...state[topping],
                amount: state[topping].amount + 1
              }
            }
      } else {
        return {
          ...state,
          [topping]: { _id: topping, amount: 1 }
        }
      }
    default:
      return state
  }
}

const currentReducer = combineReducers({
  pizza,
  size,
  toppings
})

export default currentReducer
