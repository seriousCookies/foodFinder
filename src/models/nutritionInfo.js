const mongoose = require("mongoose");
const { Schema } = mongoose;

const nutritionSchema = new Schema({
  energy: {
    type: String,
    trim: true
  },
  fat: {
    total: {
      type: String
    },
    saturated: {
      type: String
    },
  },
  carbohydrates: {
    total: {
      type: String
    },
    sugar: {
      type: String
    },
    fibre:{
      type: String
    },
  },
  protein: {
    type: String
  },
  salt: {
    type: String
  },
});

module.exports = { nutritionSchema };
