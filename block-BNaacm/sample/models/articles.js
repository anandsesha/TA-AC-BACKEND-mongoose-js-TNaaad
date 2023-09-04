var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  name: String,
  description: String,
  pages: Number,
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
