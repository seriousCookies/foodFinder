const { gql } = require("apollo-server-express");

module.exports = gql`
  type Product {
    title: String!
    subtitle: String
    shoppingListGroupName: String
    shoppingListGroupName1: String
    weight: Float
    nutritionalContent: [NutritionalContent]
    allergen: [Allergen]
    ingredients: String
    allergyDeclaration: String
    ean: String
  }

  type Allergen {
    code: String
    displayName: String
    name: String
  }

  type NutritionalContent {
    amount: Float
    unit: String
    displayName: String
    name: String
  }

  type Query {
    getProduct(search: String): Product
    getSimilarItems(search: String): [Product]
  }
`;
