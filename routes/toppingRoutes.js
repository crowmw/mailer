const mongoose = require('mongoose')
const Topping = mongoose.model('Topping')

const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.get('/api/topping', async (req, res) => {
    const toppings = await Topping.find({})

    res.send(toppings)
  })

  app.post('/api/topping', async (req, res) => {
    const { name, description, price, type } = req.body

    const topping = new Topping({
      name,
      description,
      type,
      price
    })

    await topping.save()
    res.send(topping)
  })
}
