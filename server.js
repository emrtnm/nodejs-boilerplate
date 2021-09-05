/**
 * Module dependencies.
 */
const dotenv = require('dotenv');
const chalk = require('chalk');
const express = require("express")
const logger = require('morgan')
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, 'upload') });

/**
 * Load environment variables from .env file.
 */
dotenv.config({ path: '.env' });

/**
 * Create Express server.
 */
const app = express()

/**
 * Express Settings
 */
app.use(logger('dev'));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

/**
 * Database Connection
 */
require("./config/database")

/**
 * Import lang files
 */
global.lang = require(`./locale/${process.env.LOCALE}`)

/**
 * Import Routes
 */
require('./routes').run(app)

/**
 * Listen Express server.
 */
app.listen(process.env.SERVER_PORT, (req, res) => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), process.env.SERVER_PORT, process.env.ENVIRONMENT);
    console.log('  Press CTRL-C to stop\n');
})

module.exports = app;
