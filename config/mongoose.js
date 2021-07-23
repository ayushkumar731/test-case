const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connection open')
});

module.exports = db;