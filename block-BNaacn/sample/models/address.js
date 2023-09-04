var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
  village: String,
  city: { type: String, required: true },
  state: { type: String, minlength: 3, maxlength: 10 },
  pin: Number,
  user: Schema.Types.ObjectId,
  timestamp: Date,
});

var Address = mongoose.model('Address', addressSchema);
module.exports = Address;
