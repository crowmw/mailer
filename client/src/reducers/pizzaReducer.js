import { FETCH_PIZZAS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PIZZAS:
      return action.payload
    default:
      return state
  }
}
