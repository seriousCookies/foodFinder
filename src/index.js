const { ApolloServer } = require("apollo-server-express");
const express = require ('express');
const connectDb = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express();
connectDb();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {models}
});

server.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:3000/graphql`)
)
