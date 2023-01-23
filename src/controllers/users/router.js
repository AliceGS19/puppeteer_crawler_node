const express = require('express')

const create = require('./create');

const findToken = require('./findToken');

const router = express.Router({ mergeParams: true });

router.post('/', create);

router.post('/token', findToken)


module.exports = router