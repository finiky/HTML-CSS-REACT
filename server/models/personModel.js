const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, min: 0, required: true },
  isActive: { type: Boolean, default: true },
});
module.exports = mongoose.model("Person", personSchema);
