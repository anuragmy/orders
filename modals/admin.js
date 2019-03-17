const mongoose = require("mongoose");
const uuid = require("uuid");

const adminSchema = new mongoose.Schema({
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
  }
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
