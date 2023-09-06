var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/user');
const { nextConnectionId } = require('mongoose');

// mongoose.connect(
//   'mongodb://localhost:27017/india',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     console.log(err ? err : `Connected to MongoDB`);
//   }
// );

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));

app.use(express.json());

//on POST request on `/users` route create a user
app.post('/users', async (req, res, next) => {
  //Insert a user into database
  try {
    //if success
    console.log(req.body);
    var user = await User.create(req.body);
    res.json(user);
  } catch {
    //if failure Goes to error handlers
    next(`Error inserting user into MongoDB`);
  }
});

// Query all the users from the database
app.get('/users', async (req, res, next) => {
  console.log(req.body);
  var user = await User.find(req.body);
  // console.log(user);
  res.json({ user: user });
});

// READ/Find - Get user using user ID in DB
// findByID()
app.get('/users/:id', async (req, res, next) => {
  try {
    console.log(`In try`);
    var id = req.params.id;

    var user = await User.findById(id);
    res.json(user);
  } catch (err) {
    console.log(`In Catch`);
    next(`Cannot get this findByID User`);
  }
});

// findOne()
app.get('/users', async (req, res, next) => {
  try {
    console.log(`In try of findOne()`);
    var id = req.params.id;

    var user = await User.findOne({ sports: ['cricket', 'khokho'] });
    res.json(user);
  } catch (err) {
    console.log(`In Catch`);
    next(`Cannot get this findOne User`);
  }
});

// find()
app.get('/users', async (req, res, next) => {
  try {
    console.log(`In try of Find()`);
    var user = await User.find(req.body);
    res.json(user);
  } catch (err) {
    console.log(`In Catch`);
    next(`Cannot get this find User`);
  }
});

// Update a  user

// findByIdAndUpdate()
app.put('/users/:id', async (req, res, next) => {
  try {
    var id = req.params.id;
    var user = await User.findByIdAndUpdate(id, req.body, { new: true });
    console.log(user);
    res.json(user);
  } catch (err) {
    next(`Cannot findByIdAndUpdate() user `);
  }
});

// updateOne() -
// searches DB with first parameter,
// updates using second parameter i.e the client req stored in req.body,
// and returns the new updated data with {new: true}
app.put('/users', async (req, res, next) => {
  try {
    var user = await User.updateOne({ name: 'Raman' }, req.body, { new: true });
    console.log(user);
    res.json(user);
  } catch (err) {
    next(`Cannot findByIdAndUpdate() user `);
  }
});

// Delete a user
app.delete('/users/:id', async (req, res, next) => {
  try {
    var id = req.params.id;
    var user = await User.findByIdAndDelete(id);
    console.log(user);
    res.send(`${User.name} is found by ID and DELETED!!`);
  } catch (err) {
    next(`Cannot Delete user `);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
