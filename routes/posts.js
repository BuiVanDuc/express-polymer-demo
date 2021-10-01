var express = require('express');
var router = express.Router();
var service = require('../services/posts.service')
/* GET */



router.get('/new', function(req, res, next) {
    res.render('posts/new', {title: "New blog"});
});


// Query all port
router.get('/', function(req, res, next) {
    service.getAll().then(function (posts){
        let data ={
            title: "My post",
            posts: posts
        }
        res.json(data)
    })
});

// POST - Create a post
router.post('/', function(req, res, next) {
    console.log('Got body', req.body.title, req.body.content);
    service
        .create(req.body.title, req.body.content)
        .then(function (post) {
            // res.status(200);
            // res.redirect("/posts")
            res.json({ post: post });
        });
});

// PUT - Update posts
router.put('/:id', function(req, res, next) {
    res.send('respond with a resource');
});


// Delete - Delete posts
router.delete('/', function(req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;
