import axios from 'axios'
import { FETCH_USER, FETCH_PIZZAS } from './types'
import { normalize } from 'normalizr'
import * as normalizeSchema from '../services/normalizr'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchPizzas = () => async dispatch => {
  const res = await axios.get('/api/pizza')

  const normalized = normalize(res.data, normalizeSchema.arrayOfPizzaSchema)
  dispatch({ type: FETCH_PIZZAS, payload: normalized.entities.pizza })
}

export const postPizza = () => async dispatch => {
  const body = {
    name: 'pizza',
    description: 'opis pizzy',
    price: 30,
    topping: [
      { id: '1', amount: 2 },
      { id: '3', amount: 1 },
      { id: '2', amount: 1 }
    ]
  }
  const res = await axios.post('/api/pizza', body)
  debugger
}
