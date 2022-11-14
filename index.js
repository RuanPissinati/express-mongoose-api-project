const express = require('express');
const cors = require('cors');
const mongoose = require('./app/database');
// const path = require('path');
// const routes = require('./routes');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const config = require('./app/config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(helmet());
app.use(routes);

mongoose.connect();

// app.use('/api', routes);
app.listen(process.env.PORT, console.log(' ** API is running **'));