const express = require('express');
const consola = require('consola');
const morgan = require('morgan');

const app = express();
// data pass from js to json by below
app.use(express.json());

require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3008;
const host = process.env.HOST || 'localhost';
const fileUpload = require('express-fileupload');

// main catching files are linked
const route = require('./route');

function startServer() {
  app.listen(port);
  console.log('\n');
  consola.success('compiled successfully');
  consola.success({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

// Parsing json and urlencoded data
function innitiatingBodyParser() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

function initiateCors() {
  app.use(cors());
}

function initiateFileuploader() {
  app.use(fileUpload());
}

function initiateMorgan() {
  app.use(morgan('tiny'));
}

function initiateTestRoute() {
  app.get('/', (req, res) => {
    res.json('Node server started:)');
  });
}

function initiateProjectRotue() {
  app.use(route);
}



(async () => {
  innitiatingBodyParser();
  initiateCors();
  initiateFileuploader();
  initiateMorgan();
  initiateTestRoute();
  initiateProjectRotue();
  startServer();
})();
