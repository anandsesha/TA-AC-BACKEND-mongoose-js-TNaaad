// Check README file for a use case explanation
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }, //id of user
    content: String,
    article: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
    },
  },
  { timestamps: true }
);

/*
The `ref: ` field in a Mongoose schema is used to establish
 a reference or association between two models (collections) in a MongoDB database. 
 It specifies the model that the field should be populated with when 
 you retrieve data using Mongoose.

 i.e each comment belongs to one of the articles. ref: 'Article'. This tells with a particular
 comment, (link) fetch the article info for which this comment is written. 
*/

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
