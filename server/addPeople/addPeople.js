const mongoose = require('mongoose')
const Person = require('../models/person') // Import your Person model
const peopleData = require('./fakePeopleData')

// Function to add a person to the collection
async function addPerson(
    firstname,
    lastname,
    gender,
    height,
    haircolor,
    weight,
    skincolor,
    ethnicity,
    language,
    city,
    address,
    phoneNumber,
    email,
    pictures,
    shoeSize,
    waistSize,
    age
) {
    const person = new Person({
        firstname,
        lastname,
        gender,
        height,
        haircolor,
        weight,
        skincolor,
        ethnicity,
        language,
        city,
        address,
        phoneNumber,
        email,
        pictures,
        shoeSize,
        waistSize,
        age,
    })

    await person.save()
    console.log(`Person '${firstname} ${lastname}' added to the collection.`)
}

// Function to add multiple people
async function addMultiplePeople() {
    for (const personData of peopleData) {
        await addPerson(
            personData.firstname,
            personData.lastname,
            personData.gender,
            personData.height,
            personData.haircolor,
            personData.weight,
            personData.skincolor,
            personData.ethnicity,
            personData.language,
            personData.city,
            personData.address,
            personData.phoneNumber,
            personData.email,
            personData.pictures,
            personData.shoeSize,
            personData.waistSize,
            personData.age
        )
    }

    console.log('All people added successfully.')
}

module.exports = addMultiplePeople

// const people = [
//     {
//         firstname,
//         lastname,
//         gender,
//         _id,
//         height,
//         haircolor,
//         weight,
//         skincolor,
//         ethnicity,
//         language,
//         city,
//         address,
//         phoneNumber,
//         email,
//         pictures,
//         shoeSize,
//         waistSize,
//         age,
//     },
// ];
