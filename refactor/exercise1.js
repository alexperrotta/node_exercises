
// Extract a reusable function saveWebPage(url, filename, callback). You should be able to use the function like so:

// saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('It worked.');
// });

function saveWebPage(url, filename, callback) {

    const request = require('request');
    const fs = require('fs');

    const url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
    const filename = 'output.html';

    request.get(url, (err, response, html) => {
        if (err) {
            console.log(err.message);
            return;
        }
    fs.writeFile(filename, html,(err) => {
        if (err) {
            console.log(err.message);
            return;
            }
            console.log('It worked');
            callback();
        });
    });
}

module.exports = { saveWebPage };


// A separate file
// get the url and save it to a file, then log to the console

const save = require('./save-web-page');
// 3 argurments, the function is the callback
save.saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', () => {
    console.log('ran callback. file saved');
};