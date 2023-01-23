const express = require('express');

const webcrawllerCrawlersController = require('./endpoints/webcrawller/crawlers/router');

const usersController = require('./users/router')

const root = express.Router({ mergeParams: true });

root.use('/crawlers/webcrawller', webcrawllerCrawlersController);

root.use('/users', usersController)

module.exports = root;