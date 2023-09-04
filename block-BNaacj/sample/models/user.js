var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  age: Number,
  password: { type: String, minLength: 5, maxLength: 15 },
  createdAt: { type: Date, default: Date.now() },
});
