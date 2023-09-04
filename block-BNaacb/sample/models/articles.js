var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
  name: String,
  description: String,
  pages: Number,
});
