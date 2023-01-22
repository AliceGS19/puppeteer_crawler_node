const express = require('express');
const webcrawllerCrawlersController = require('./endpoints/webcrawller/crawlers/router');

const root = express.Router({ mergeParams: true });

root.use('/crawlers/webcrawller', webcrawllerCrawlersController);

module.exports = root;