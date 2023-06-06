const mongoose = require("mongoose");

const user = mongoose.Schema({
  metamaskid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  token: {
    type: String,
    default: ''
  },
  isAdmin: {
    type: Boolean,
    default: false
  },

});

module.exports = mongoose.model("User", user);