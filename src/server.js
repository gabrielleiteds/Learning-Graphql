const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose')
const path = require('path')

const resolvers = require('./resolvers')

require('./connect')

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start(3000); 