const { text } = require("express");
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  user: { type: String, required: true, index: 1 },
  questions: [{ type: String }],
  answers: [{ type: String }],
  reply: [{ type: String }],
  vote: { type: Number, index: 1 },
  tags: [{ type: String, index: 1 }],
  views: { type: Number, index: 1 },
  reputation: { type: String },
});

userSchema.index({ questions: text }, { answers: text }, { reply: text });
const User = mongoose.model("User", userSchema);

module.exports = User;
