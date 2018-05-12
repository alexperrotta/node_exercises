const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('file:', (filename) => {
    rl.close();
    fs.readFile(filename, 'utf8', (err, data) => { // data is the contents of the file
        if (err) {
            console.log(filename + 'does not exist');
            return;
        }
        console.log(data.toUpperCase());
    });
});