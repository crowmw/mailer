import { combineReducers } from 'redux'
import authReducer from './authReducer'
import pizzaReducer from './pizzaReducer'
import toppingReducer from './toppingReducer'

export default combineReducers({
  auth: authReducer,
  pizza: pizzaReducer,
  topping: toppingReducer
})
