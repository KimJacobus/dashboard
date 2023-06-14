const graphql = require('graphql')
const Person = require('../models/person')
const { ObjectId } = require('mongodb')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = graphql

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        _id: { type: GraphQLString },
        gender: { type: GraphQLString },
        picture: { type: GraphQLString },
        availability: { type: GraphQLBoolean },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        height: { type: GraphQLString },
        haircolor: { type: GraphQLString },
        weight: { type: GraphQLString },
        skincolor: { type: GraphQLString },
        ethnicity: { type: GraphQLString },
        language: { type: GraphQLString },
        city: { type: GraphQLString },
        address: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        email: { type: GraphQLString },
        pictures: { type: GraphQLString },
        shoeSize: { type: GraphQLInt },
        waistSize: { type: GraphQLInt },
        age: { type: GraphQLInt },
    }),
})

const GenderType = new GraphQLObjectType({
    name: 'Gender',
    fields: () => ({
        gender: { type: GraphQLString },
    }),
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people: {
            type: new GraphQLList(PersonType),
            args: {
                filter: { type: GraphQLString },
                argument: { type: GraphQLString },
            },
            resolve(parent, args) {
                if (args.filter === '_id' && ObjectId.isValid(args.argument)) {
                    // const objID = ObjectId(args.argument)
                    return Person.find({
                        [args.filter]: args.argument,
                    })
                } else if (args.filter) {
                    return Person.find({ [args.filter]: args.argument })
                } else {
                    return Person.find({})
                }
            },
        },
    },
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPerson: {
            type: PersonType,
            args: {
                gender: { type: GraphQLString },
                picture: { type: GraphQLString },
                availability: { type: GraphQLBoolean },
                firstname: { type: GraphQLString },
                lastname: { type: GraphQLString },
                height: { type: GraphQLString },
                haircolor: { type: GraphQLString },
                weight: { type: GraphQLString },
                skincolor: { type: GraphQLString },
                ethnicity: { type: GraphQLString },
                language: { type: GraphQLString },
                city: { type: GraphQLString },
                address: { type: GraphQLString },
                phoneNumber: { type: GraphQLString },
                email: { type: GraphQLString },
                pictures: { type: GraphQLString },
                shoeSize: { type: GraphQLInt },
                waistSize: { type: GraphQLInt },
                age: { type: GraphQLInt },
            },
            resolve(parent, args) {
                let person = new Person({
                    gender: args.gender,
                    picture: args.picture,
                    availability: args.availability,
                    firstname: args.firstname,
                    lastname: args.lastname,
                    height: args.height,
                    haircolor: args.haircolor,
                    weight: args.weight,
                    skincolor: args.skincolor,
                    ethnicity: args.ethnicity,
                    language: args.language,
                    city: args.city,
                    address: args.address,
                    phoneNumber: args.phoneNumber,
                    email: args.email,
                    pictures: args.pictures,
                    shoeSize: args.shoeSize,
                    waistSize: args.waistSize,
                    age: args.age,
                })
                return person.save()
            },
        },
    },
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})
