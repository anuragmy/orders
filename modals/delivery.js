const mongoose = require("mongoose");
const uuid = require("uuid");

const deliverySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  name: {
    type: String,
    default: "Suresh"
  },
  deliveryID: {
    type: String,
    default: uuid()
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer._id"
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order._id"
  },
  orderStatus: {
    type: String,
    default: "Task Created",
    required: true
  },
  orderDispatchLocation: {
    type: String
  }
});

const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
