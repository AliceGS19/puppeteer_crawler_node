const express = require('express')

const notebooks = require('./notebooks');

const { users } = require('../../../../middlewares')

const router = express.Router({ mergeParams: true });

router.get('/notebooks', notebooks);

router.get('/authenticate/notebooks', users.authenticate, notebooks)


module.exports = router