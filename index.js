const express = require('express');
const debug = require('debug');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
// const session = require('express-session');
const { MongoClient } = require('mongod');
const mongoose = require('mongoose');
const app = express();
const port = 3002;

app.use(morgan('tiny')); // or combined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Connecting to Mongod with Mongoose
  // Or using promises
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).then(
    () => { console.log('Successfully connected to Mongodb from Mongoose!') },
    err => { console.log(err) }
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    let testSchema = mongoose.Schema({
      name: String
    });

    let Item;
    try {
      Item = mongoose.model('Item');
    } catch (error) {
      Item = mongoose.model('Item', testSchema);
    }



    let newItem = new Item({ name: 'Test Document!' });
    newItem.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('You saved a document!');
      }
    });
  });
  res.render('index', { header: 'It All Starts Here!' });
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
})
  .on('error', function (e) {
    console.log(e);
  });