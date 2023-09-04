var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  favorites: [String],
  marks: [Number],
});

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
});
