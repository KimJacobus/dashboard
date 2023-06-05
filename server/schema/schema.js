const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    available: { type: GraphQLBoolean },
  }),
})

const GenderType = new GraphQLObjectType({
  name: 'Gender',
  fields: () => ({
    male: { type: GraphQLString },
    female: { type: GraphQLString },
    nonBinary: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PersonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(persons, { id: args.id })
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
