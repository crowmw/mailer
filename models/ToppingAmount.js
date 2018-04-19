const mongoose = require('mongoose')
const { Schema } = mongoose
const Topping = mongoose.model('toppings')

const toppingAmountSchema = new Schema({
  _topping: { type: Schema.Types.ObjectId, ref: 'Topping' },
  amount: Number
})

module.exports = toppingAmountSchema
