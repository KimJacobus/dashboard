const graphql = require('graphql')
const _ = require('lodash')
const Person = require('../models/person')

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
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        picture: { type: GraphQLString },
        availability: { type: GraphQLBoolean },
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
                if (args.filter) {
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
                name: { type: GraphQLString },
                gender: { type: GraphQLString },
                picture: { type: GraphQLString },
                availability: { type: GraphQLBoolean },
            },
            resolve(parent, args) {
                let person = new Person({
                    name: args.name,
                    gender: args.gender,
                    picture: args.picture,
                    availability: args.availability,
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
