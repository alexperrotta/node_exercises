let express = require('express');
let router = express.Router();

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

// Get home page
router.get('/', function(req, res, next) {

    // read the blog posts
    readFile('blog-posts.json')
    .then((data) => {
        const blogPosts = JSON.parse(data);

        let dataForTemplate = {
            title: 'Panda Express',
            myName: 'chris aquinooooooooooooo',
            cats: ['oakley', 'milla'],
            posts: blogPosts
          };
        
        // here is where i res.render, don't have to specify the hbs after index
      res.render('index', templateData);
        }).catch(err => {
        console.log(err);
        })
        
    })

    // get a blog post
    router.get('/:postId', (req, res, next) => {
        readFile('blog-posts.json')
          .then((data) => {
            // the postId is available to us with req.params.postId
            const blogPosts = JSON.parse(data);
            const id = req.params.postId;
            const thePost = blogPosts[id];
      
            console.log("the id is: " + id);
            console.log("here is the post: " + JSON.stringify(thePost));
      
            return thePost;
          })
          .then((blogPostData) => {
      
            // here is where i res.render to a new hbs file called blog-post
            res.render('blog-post', blogPostData);
      
          }).catch(err => {
            console.log(err);
          })
      });

      // render an about page






      // add another route that listens for GET requests at the path "/new-post". This route should render a 
      // template that shows an HTML form for a new blog post
    //   on this form, set the "action" attribute to "/new-post" and set the "method" attribute to "POST". (When the user fills out and submits the form, it will try to send a POST request to the Express server. You'll create another route for this in the next step.)

      router.get('/new-post', req, res, next => {



        res.render('blog-post', blogPostData);

      });

    // add yet another route that listens for POST requests at the path "/new-post". This route should read the data that was sent from the form and save it to "blog-posts.json" file. After that, you still need to send a response back to the browser. Your response could be a simple page with the message "Blog post saved successfully".


module.exports = router;