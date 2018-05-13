import { combineReducers } from 'redux'
import { FETCH_TOPPINGS } from '../actions/types'

const initialState = {
  entities: {}
}

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case FETCH_TOPPINGS:
      return action.payload
    default:
      return state
  }
}

const toppingReducer = combineReducers({
  entities
})

export default toppingReducer
