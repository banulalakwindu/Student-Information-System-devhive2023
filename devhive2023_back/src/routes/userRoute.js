const express = require('express');
const router = express.Router();
const getResults = require('../controllers/getResults');

router.get('/results/:code', getResults.getResults);

module.exports = router;

