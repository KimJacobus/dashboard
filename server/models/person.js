const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema(
    {
        _id: String,
        name: String,
        gender: String,
        picture: String,
        hairColor: String,
        location: String,
        availability: Boolean,
        firstname: String,
        lastname: String,
        height: String,
        haircolor: String,
        weight: String,
        skincolor: String,
        ethnicity: String,
        language: String,
        city: String,
        address: String,
        phoneNumber: String,
        email: String,
        pictures: String,
        shoeSize: Number,
        waistSize: Number,
        age: Number,
    },
    { collection: 'people' }
)

module.exports = mongoose.model('Person', personSchema)
