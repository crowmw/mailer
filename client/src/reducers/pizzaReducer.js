import { combineReducers } from 'redux'

import currentReducer from './currentReducer'
import { FETCH_PIZZAS } from '../actions/types'

const initialState = {
  entities: null
}

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case FETCH_PIZZAS:
      return action.payload
    default:
      return state
  }
}

const pizzaReducer = combineReducers({
  entities,
  current: currentReducer
})

export default pizzaReducer
