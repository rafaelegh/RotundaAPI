const express = require('express');
const app = express();
const errorAlarmRouter = require('./routes/errorAlarmRoute');
const urlParserRouter = require('./routes/urlParserRoute');

app.use(express.json());

app.use('/api/v1/', errorAlarmRouter);
app.use('/api/v1/', urlParserRouter);


module.exports = app;
