const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  isThemeDark: {
    required: true,
    type: Boolean,
  },
  firstname: {
    required: true,
    type: String,
  },
  lastname: {
    required: true,
    type: String,
  },
  auth: {
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
});

module.exports = mongoose.model("User", userSchema, "user");
