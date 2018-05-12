const fs = require('fs');
const readline = require('readline');

// Create the interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input file: ', (inputFilename) => {
    rl.question('output file: ', (outputFilename) => {
        rl.close();

        fs.readFile(input, 'utf8', (err, inputData) => { // data is the contents of the file
            if (inputErr)) {
               return console.log(inputErr);
            }
            let outputData = inputData.toUpperCase();
            fs.writeFile(outputFilename, outputData, (outputErr) => {
                if (outputErr) {
                    return console.log(outputErr)
                };
                return console.log('Writing file ' + inputFilename + ' to ' + outputFilename + ' was successfull.');
            })
        });

    });
});