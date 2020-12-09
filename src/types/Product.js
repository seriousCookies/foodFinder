const { gql } = require('apollo-server-express');

module.exports = gql`

  type NutritionInfo {
    energy: String!
    fat: Fats!
    carbohydrates: CHO!
    protein: String!
    salt: String!
  }
  type Fats {
    total: String!
    saturated: String!
  }
  type CHO {
    total: String!
    sugar: String!
    fiber: String!
  }

  input NutritionInfoInput {
    energy: String!
    fat: FatsInput!
    carbohydrates: CHOInput!
    protein: String!
    salt: String!
  } 
  input CHOInput {
    total: String!
    sugar: String!
    fiber: String!
  }
  input FatsInput {
    total: String!
    saturated: String!
  }

  type Product {
    id: ID!
    name: String!
    barcode: String!
    nutritionInfo: NutritionInfo
    allergens: String
    ingredients: String
  }

  input CreateProductInput {
    name: String!
    barcode: String!
    nutritionInfo: [NutritionInfoInput]!
    allergens: String!
    ingredients: String!
  }

  input UpdateProductInput {
    name: String
    barcode: String
    nutritionInfo: [NutritionInfoInput]
    allergens: String
    ingredients: String
  }

  input DeleteProductInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: ID!, input: UpdateProductInput!): Product!
    deleteProduct(id: ID!): DeletePayload!
  }
  
`;
