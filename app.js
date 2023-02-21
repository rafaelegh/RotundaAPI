const cors = require('cors');
const express = require('express');
const app = express();
const errorAlarmRouter = require('./routes/errorAlarmRoute');
const urlParserRouter = require('./routes/urlParserRoute');
const zooRouter = require('./routes/zooRoute');

app.use(express.json());

app.use(cors({
    origin: 'http://127.0.0.1:5173'
}));

app.use('/api/v1/', errorAlarmRouter);
app.use('/api/v1/', urlParserRouter);
app.use('/api/v1/', zooRouter);


module.exports = app;
