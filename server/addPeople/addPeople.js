const mongoose = require('mongoose')
const Person = require('../models/person') // Import your Person model
const peopleData = require('./fakePeopleData')

// Function to add a person to the collection
async function addPerson(name, gender, picture, availability) {
    const person = new Person({
        name,
        gender,
        picture,
        availability,
    })

    await person.save()
    console.log(`Person '${name}' added to the collection.`)
}

// Function to add multiple people
async function addMultiplePeople() {
    for (const personData of peopleData) {
        await addPerson(
            personData.name,
            personData.gender,
            personData.picture,
            personData.availability
        )
    }

    console.log('All people added successfully.')
}

module.exports = addMultiplePeople
