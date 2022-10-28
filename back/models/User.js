const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "must provide name(s)"],
    trim: true,
    unique: true,
    maxlength: [50 , "name can not be more than 50 characters"],
  },
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "must provide email"],
    unique:true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "must provide password"],
    trim: true,
    minlength: [6, "min length should be 6 letters"],
  },
});

module.exports = mongoose.model("User",UserSchema);
