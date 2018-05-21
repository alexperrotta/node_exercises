const readline = require('readline');
const dns = require('dns');
const util = require('util'); // add this in order to use promisify

// Create the interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// promisify
// send the function, making dns.lookup into a promisify to use it elsewhere
const lookup = util.promisify(dns.lookup);  
 

// Prompt, then wait for user to type a domain name
rl.question('Domain name: ', (domain) => {
  rl.close();

// using a promise, gets the domain and then logs it to the console
lookup(domain)
  .then((address) => {
    console.log(`IP address: ${address}`);
  })
  .catch((err) => {
    return console.log(err);
  });


// alternate way

//   // Do the DNS lookup
//   dns.lookup(domain, (err, address) => {

//     if (err) {
//       // If there's an error, print it and
//       // exit the program (via `return`).
//       console.log(err.message);
//       return;
//     }

//     // Otherwise, print the IP address.
//     console.log(`IP address: ${address}`);
//   })
});