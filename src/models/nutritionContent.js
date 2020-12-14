const mongoose = require("mongoose");
const { Schema } = mongoose;

const nutritionContentSchema = new Schema([{
  amount: { type: String, required: true },
  unit: { type: String, required: true },
  displayName: { type: String, required: true },
  name: { type: String, required: true }
}])

module.exports = { nutritionContentSchema };