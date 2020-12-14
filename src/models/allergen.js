const mongoose = require("mongoose");
const { Schema } = mongoose;

const allergenSchema = new Schema([{
  code: { type: String, required: true },
  displayName: { type: String, required: true },
  name: { type: String, required: true }
}])

module.exports = { allergenSchema };