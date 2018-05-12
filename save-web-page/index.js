const fs = require('fs');
const readline = require('readline');
const http = require('http');

// Create the interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the url?: ', (url) => {
    rl.question('What is the output?: ', (outputFilename) => {
        rl.close();

    http.get(url, (response) => {
        let outputData = '';
        response.on('data', (data) => {
            outputData += data;
        })
        response.on('end', () => {
            fs.writeFile(ouputFilename, outputData, (outputErr) => {
                if (outputErr)) {
                   return console.log(inputErr);
                }
                return console.log('Saving ' + url + ' was successful.');
        })
    })       
        

    });
});