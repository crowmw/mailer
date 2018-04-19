const mongoose = require('mongoose')
const { Schema } = mongoose

const User = mongoose.schm

const userSchema = new Schema({
  googleId: String
})

mongoose.model('users', userSchema)
