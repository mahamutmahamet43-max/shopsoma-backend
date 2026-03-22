const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  shopId: String,
  name: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model("Product", productSchema);