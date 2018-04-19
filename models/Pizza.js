const mongoose = require('mongoose')
const { Schema } = mongoose
const ToppingAmountSchema = require('./ToppingAmount')

const pizzaSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  topping: [ToppingAmountSchema]
})

mongoose.model('pizzas', pizzaSchema)
