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

module.exports = router;