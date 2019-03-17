const mongoose = require("mongoose");
const uuid = require("uuid");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  },
  deliveryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Delivery._id"
  }
});

const Customers = mongoose.model("Customers", customerSchema);
module.exports = Customers;
