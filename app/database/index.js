// const mongoose = require('mongoose');

// // VARIAVEIS INICIAIS
// const options = {
//     autoIndex: true, // Don't build indexes
//     maxPoolSize: 10, // Maintain up to 10 socket connections
//     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
// };
// const uri = 'mongodb+srv://ruanpissinati:56784321@mygameprojectcluster.j1oamee.mongodb.net/?retryWrites=true&w=majority';

// // FUNCOES MONGOOSE
// mongoose.connection.on('connected', () => {
//     console.log('MongoDB is connected');
// });

// mongoose.connection.on('error', err => {
//     console.log(`Could not connect to MongoDB because of ${err}`);
//     process.exit(1);
// });

// mongoose.set('debug', true);

// exports.connect = () => mongoose.connect(uri, options);








// const conn = mongoose.createConnection(process.env.MONGODB_URI);
// conn.model('User', require('../schemas/user'));

// module.exports = conn;

// // connections/slow.js
// const mongoose = require('mongoose');

// const conn = mongoose.createConnection(process.env.MONGODB_URI);
// conn.model('User', require('../schemas/user'));
// conn.model('PageView', require('../schemas/pageView'));

// module.exports = conn;










'use strict';

const config = require('../config');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected');
});

mongoose.connection.on('error', err => {
  console.log(`Could not connect to MongoDB because of ${err}`);
  process.exit(1);
});

mongoose.set('debug', true);

exports.connect = () => {
  mongoose.connect(config.mongo.uri, {
    keepAlive: 1,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  mongoose.set('useCreateIndex', true);

  return mongoose.connection;
};