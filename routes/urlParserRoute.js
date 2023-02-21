const express = require('express');
const router = express.Router();
const urlParserController = require('./../controller/urlParserController');

router.post('/url-parser', urlParserController.urlParser);

module.exports = router;
