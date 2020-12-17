const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    title: String!
    weight: Float
    subtitle: String
    nutritionalContent: [NutritionalContent]
    allergen: [Allergen]
    ingredients: String
    ean: String
  }

  type Allergen {
    code:String
    displayName:String
    name:String
  }

  type NutritionalContent {
    amount: Float
    unit: String
    displayName: String
    name: String
  }
  
  type Query {
    getProduct (
      search: String
      ): Product
  }
`;
module.exports = typeDefs