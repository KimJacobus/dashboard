const graphql = require('graphql')

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
