const express = require('express');
const app = express();
const errorAlarmRouter = require('./routes/errorAlarmRoute');

app.use(express.json());

app.use('/api/v1/', errorAlarmRouter);

module.exports = app;
