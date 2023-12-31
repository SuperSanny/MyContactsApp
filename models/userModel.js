const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter user name."],
    },
    email: {
      type: String,
      required: [true, "Please enter email address."],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, "Please enter user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
