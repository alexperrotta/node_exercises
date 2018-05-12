const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the domain name', (domain) => {
    rl.close();
    
});