const mongoose = require("mongoose");
const { Schema } = mongoose;
const nutritionSchema = require('./nutritionInfo');

const productSchema = new Schema({
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

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
