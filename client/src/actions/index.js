import axios from 'axios'
import {
  FETCH_USER,
  FETCH_PIZZAS,
  FETCH_TOPPINGS,
  UPDATE_CURRENT_SIZE,
  UPDATE_CURRENT_PIZZA,
  UPDATE_CURRENT_TOPPING
} from './types'
import { normalize } from 'normalizr'
import * as normalizeSchema from '../services/normalizr'
import { getCurrentPizzaDefaultTopping } from '../selectors/pizzaSelector'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchPizzas = () => async dispatch => {
  const res = await axios.get('/api/pizza')

  if (res.data.length > 0) {
    const normalized = normalize(res.data, normalizeSchema.arrayOfPizzaSchema)
    dispatch({ type: FETCH_PIZZAS, payload: normalized.entities.pizza })
  }
}

export const postPizza = () => async dispatch => {
  const body = {
    name: 'pizza',
    description: 'opis pizzy',
    price: [18, 25, 30],
    toppings: [
      { topping: '5af1e0257a094b28d0550143', amount: 2 },
      { topping: '5af1e03b7a094b28d0550144', amount: 1 },
      { topping: '5af1e03e7a094b28d0550145', amount: 1 }
    ]
  }
  const res = await axios.post('/api/pizza', body)
  console.log(res)
}

export const fetchToppings = () => async dispatch => {
  const res = await axios.get('/api/topping')

  if (res.data.length > 0) {
    const normalized = normalize(res.data, normalizeSchema.arrayOfToppingSchema)
    dispatch({ type: FETCH_TOPPINGS, payload: normalized.entities.topping })
  }
}

export const postTopping = () => async dispatch => {
  const body = {
    name: 'mozzarella',
    description: 'aromatyczny ser',
    type: 'cheese',
    price: 1
  }

  const res = await axios.post('/api/topping', body)
  console.log(res)
}

export const updateCurrentSize = size => ({
  type: UPDATE_CURRENT_SIZE,
  payload: Number(size)
})

export const updateCurrentPizza = pizza => ({
  type: UPDATE_CURRENT_PIZZA,
  payload: pizza
})

export const updateCurrentTopping = topping => (dispatch, getState) => {
  const currentPizzaTopping = getCurrentPizzaDefaultTopping(getState())

  if (
    currentPizzaTopping[topping] &&
    currentPizzaTopping[topping].amount === 2
  ) {
    return dispatch({
      type: UPDATE_CURRENT_TOPPING,
      payload: {
        topping,
        amount: 0
      }
    })
  } else {
    return dispatch({
      type: UPDATE_CURRENT_TOPPING,
      payload: {
        topping,
        amount: 1
      }
    })
  }
}
