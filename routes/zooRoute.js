const express = require('express');
const router = express.Router();
const zooController = require('./../controller/zooController');

router.post('/zoo', zooController.zoo);

module.exports = router;