const { Double } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const nutritionContent = require('./nutritionContent');
const allergen = require('./allergen');


const sourceSchema = new Schema({
  title: { type: String, required: true },
  weight: { type: String },
  subtitle: { type: String, required: true },
  nutritionContent: {type: nutritionContent, required: true},
  allergen: {type: allergen, required: true},
  ingredients: { type: String, required: true },
  ean: { type: String, required: true },
})

module.exports = { sourceSchema };