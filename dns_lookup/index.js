const readline = require('readline');
const dns = require('dns');

// Create the interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt, then wait for user to type a domain name
rl.question('Domain name: ', (domain) => {
  rl.close();

  // Do the DNS lookup
  dns.lookup(domain, (err, address) => {

    if (err) {
      // If there's an error, print it and
      // exit the program (via `return`).
      console.log(err.message);
      return;
    }

    // Otherwise, print the IP address.
    console.log(`IP address: ${address}`);
  })
});