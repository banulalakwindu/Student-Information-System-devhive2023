const express = require('express');
const router = express.Router();
const getResults = require('../controllers/getResults');
const getCources = require('../controllers/getCources');

router.get('/results/:code', getResults.getResults);
router.get('/')
module.exports = router;

