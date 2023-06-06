const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema(
    {
        name: String,
        gender: String,
        picture: String,
        hairColor: String,
        location: String,
        availability: Boolean,
    },
    { collection: 'people' }
)

module.exports = mongoose.model('Person', personSchema)
