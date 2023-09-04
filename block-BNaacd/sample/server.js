var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/india');

app.listen(3000, () => {
  console.log(`Server is listening at port 3000`);
});
