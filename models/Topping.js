const mongoose = require('mongoose')
const { Schema } = mongoose

const toppingTypes = ['souce', 'cheese', 'vege', 'meat']

const toppingSchema = new Schema({
  name: String,
  description: String,
  type: { type: String, enum: toppingTypes, default: 'vege' },
  price: Number
})

mongoose.model('toppings', toppingSchema)
