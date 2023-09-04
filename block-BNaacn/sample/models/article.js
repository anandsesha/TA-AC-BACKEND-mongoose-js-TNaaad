var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
  title: String,
  description: String,
  tage: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Article', articlesSchema);
