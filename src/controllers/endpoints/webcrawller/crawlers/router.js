const express = require('express')

const notebooks = require('./notebooks');

const router = express.Router({ mergeParams: true });

router.get('/notebooks', notebooks);


module.exports = router