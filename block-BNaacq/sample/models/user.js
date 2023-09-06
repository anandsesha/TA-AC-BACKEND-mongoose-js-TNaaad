// Check README file for a use case explanation
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    age: { type: Number, minlength: 18 },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
