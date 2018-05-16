const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');  // middleware
const app = express();

app.use(bodyParser.urlencoded({ extended: false })) // make the body available to us as a group of fields
app.use(bodyParser.json())                          // than parse it to json

app.get('/', (request, result) => {   // the '/' is the root directory
    result.send('Hey Builders!');
})

app.get('/contacts', (request, response) => {
    fs.readFile('contacts.json', (err, data) => {
        if (err) { return console.log(err) }
        response.send(JSON.parse(data));
    })
})

app.get('/contact/:id', (request, response) => {
    fs.readFile('contacts.json', (err, data) => {
        if (err) { return console.log(err) }
        // set id to the number that was passed from the URL
        const id = request.params.id;
        // filter the JSON data from our file into the result variable
        const result = JSON.parse(data).filter((entry) => {
            // if the entry.id matches what came from the url, let it through
            // if it doesn't, filter it out
            return entry.id == id
        });
        response.send(result);
    })
})

app.post('/new', (request, response) => {
    fs.readFile('contacts.json', (err, data) => {
        if (err) { return console.log(err) }
        let contacts = JSON.parse(data);
        let newId = contacts.length + 1;
        let newContact = {
            id: newId,
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            email: request.body.email,
        };
        contacts.push(newContact);
        fs.writeFile('contacts.json', JSON.stringify(contacts, null, ' '), () => {
            response.send(newContact);
        });
    // response.send(request.body);
    });
})

app.listen(3000, () => {
    console.log('Running on port 3000');
})

