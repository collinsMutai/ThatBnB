const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  //   imagePath: { type: String, required: true },
});

module.exports = mongoose.model("Rental", rentalSchema);
