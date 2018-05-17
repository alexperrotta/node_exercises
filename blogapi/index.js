const express = require('express');
const app = express();

app.get('/', (request, result) => {   
    result.send('Hey Builders!');
})


app.get('/blog', (request, response) => {
    fs.readFile('blog-data.json', (err, data) => {
        if (err) { return console.log(err) }
        response.send(JSON.parse(data));
    })
})

app.get('/blog/:id', (request, response) => {
    fs.readFile('blog-data.json', (err, data) => {
        if (err) { return console.log(err) }
        const id = request.params.id;
        const result = JSON.parse(data).filter((entry) => {
            return entry.id == id
        });
        response.send(result);
    })
})


app.post('blog/new', (request, response) => {
    fs.readFile('blog-data.json', (err, data) => {
        if (err) { return console.log(err) }
        let blogs = JSON.parse(data);
        let newId = blogs.length + 1;
        let newBlog = {
            id: newId,
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            date: request.body.date,
            title: request.body.title,
            content: request.body.content,
        };
        blogs.push(newBlog);
        fs.writeFile('blog-data.json', JSON.stringify(blogs, null, ' '), () => {
            response.send(newBlog);
        });
    });
})


app.listen(3000, () => {
    console.log('Running on port 3000');
})
