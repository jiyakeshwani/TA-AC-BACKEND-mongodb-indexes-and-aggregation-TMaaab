const { text } = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

userSchema.index({ tags: 1 });
userSchema.index({ title: text }, { description: text });

module.exports = mongoose.model("Article", articleSchema);
