const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const MongoClient = require("mongodb").MongoClient;
const url = process.env.DATABASE_URL;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  if (err) {
    console.log(err, "Couldn't connect to MongoDB here");
  } else {
    db = client.db(`${process.env.DB_DATABASE}`);
    console.log(`MONGOdb connected 🍒`);
  }
});

const app = express();
// connectDb();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });
app.listen(process.env.PORT, () =>
  console.log(`🍍 Server ready at http://localhost:3000/graphql`)
);
module.exports.app = app;
