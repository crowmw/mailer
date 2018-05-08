import { combineReducers } from 'redux'
import authReducer from './authReducer'
import pizzaReducer from './pizzaReducer'

export default combineReducers({
  auth: authReducer,
  pizza: pizzaReducer
})
