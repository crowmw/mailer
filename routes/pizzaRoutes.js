const mongoose = require('mongoose')
const Pizza = mongoose.model('Pizza')

const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.get('/api/pizza', async (req, res) => {
    const pizzas = await Pizza.find({}).populate('toppings.topping')

    res.send(pizzas)
  })

  app.post('/api/pizza', async (req, res) => {
    const { name, description, price, toppings } = req.body

    const pizza = new Pizza({
      name,
      description,
      price,
      toppings: toppings.map(top => {
        return { topping: top.topping, amount: top.amount, _id: top.topping }
      })
    })

    await pizza.save()
    res.send(pizza)
  })
}
