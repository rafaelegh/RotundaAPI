const fs = require('fs');

let errorCounter = 0;

function logError(error) {
    appendErrorToLogFile(error);
    errorCounter++;
    console.log('error numbers: ', errorCounter);
}

function appendErrorToLogFile(error) {
    fs.readFile('./log/errorLog.txt', 'utf-8', (err, text) => {
        let prevText = text;
        const newText = `${prevText}\n${error} at ${new Date().toUTCString()}`;
        fs.writeFile('./log/errorLog.txt', newText, 'utf-8', err => {
            if (err) {
                console.log(err);
            }
        });
    });
};

function sendNotificationEmail() {
    console.log('sending emails with errors');
}

const errorTimer = setInterval(() => {
    // Check the error counter
    console.log('interval');
    if (errorCounter > 10) {
        // Send an email notification and reset the counter
        sendNotificationEmail();
    }
    errorCounter = 0;
}, 60000);

exports.errorAlarm = (req, res, next) => {
    let { newError } = req.body;

    logError(newError);
    res.status(200).json({ response: `error was logged, number of errors in a minute: ${errorCounter}`});
};