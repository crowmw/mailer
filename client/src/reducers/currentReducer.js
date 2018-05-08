import { combineReducers } from 'redux'
import { CHANGE_CURRENT_SIZE } from '../actions/types'

const initialState = {
  pizza: null,
  size: 2,
  toppings: []
}

export const pizza = (state = initialState.pizza, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const size = (state = initialState.size, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SIZE:
      return action.payload
    default:
      return state
  }
}

export const toppings = (state = initialState.toppings, action) => {
  switch (action.type) {
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
