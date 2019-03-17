const mongoose = require("mongoose");
const uuid = require("uuid");

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  item: {
    type: String,
    required: true,
    quantity: Number
  },
  catagory: {
    type: String,
    required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers._id"
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
