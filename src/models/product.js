const mongoose = require("mongoose");
const { Schema } = mongoose;
const nutritionSchema = require('./nutritionInfo');

const productSchema = Schema({
  name: {
    type: String,
    trim: true
  },
  barcode: {
    type: String,
    trim: true
  },
  ingredients: {
    type: String
  },
  allergens: {
    type: String
  },
  nutritionInfo: {
    type: nutritionSchema
  }
});

const Product = mongoose.model("Parsed-Meny", productSchema);

module.exports = { Product };
