const mongoose = require('mongoose')
const Pizza = mongoose.model('Pizza')

const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.get('/api/pizza', async (req, res) => {
    const pizzas = await Pizza.find({})

    res.send(pizzas)
  })

  app.post('/api/pizza', async (req, res) => {
    const { name, description, price, topping } = req.body

    const pizza = new Pizza({
      name,
      description,
      price,
      topping: topping.map(top => {
        return { id: top.id, amount: top.amount }
      })
    })

    await pizza.save()
    res.send(pizza)
  })
}
