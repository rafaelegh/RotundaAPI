const express = require('express');
const router = express.Router();
const errorAlarmController = require('./../controller/errorAlarmController');

router.post('/log-error', errorAlarmController.errorAlarm);

module.exports = router;
