// Check README file for a use case explanation
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to populate from the User model. Here author of an article, is one of the users entered in DB and linked to ariticles table, HERE.
      required: true,
    }, //id of user
    title: { type: String, required: true },
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    comments: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
