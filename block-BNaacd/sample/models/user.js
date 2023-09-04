var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

var userSchema = new Schema({
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
});
