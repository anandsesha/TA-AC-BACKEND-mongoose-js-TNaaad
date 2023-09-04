var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  age: Number,
  password: { type: String, minlength: 5, maxlength: 15 },
  createdAt: { type: Date, default: Date.now() },
});
