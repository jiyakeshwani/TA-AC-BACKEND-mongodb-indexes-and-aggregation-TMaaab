var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    city: String,
    state: String,
    country: String,
    pin: Number,
  },
});

userSchema.index({ email: 1 }, { username: 1 }, { unique: true });
userSchema.index({ "address.country": 1 }, { "address.state": 1 });

module.exports = mongoose.model("User", userSchema);
