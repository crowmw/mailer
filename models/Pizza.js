const mongoose = require('mongoose')
const { Schema } = mongoose

const pizzaSchema = new Schema({
  name: String,
  description: String,
  price: { type: [Number] },
  toppings: [
    {
      topping: {
        type: Schema.Types.ObjectId,
        ref: 'Topping'
      },
      amount: Number
    }
  ]
})

mongoose.model('Pizza', pizzaSchema)
