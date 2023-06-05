const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genderSchema = new Schema({
  male: String,
  female: String,
  nonBinary: String,
})

module.exports = mongoose.model('Gender', genderSchema)
