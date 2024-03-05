const users = require('./users.js');
const posts = require('./posts.js');
const comments = require('./comments.js'); 

const router = require('express').Router();

router.post('/users', (req, res) => {
    users.createUser(req.body.username, req.body.password, req.body.role, function(error, results) {
        if (error) {
            res.status(500).send('Error creating user');
        } else {
            res.status(201).send('User created');
        }
    });
});

router.get('/users/:username', (req, res) => {
    users.getUser(req.params.username, function(error, results) {
        if (error) {
            res.status(500).send('Error getting user');
        } else {
            res.status(200).send(results);
        }
    });
});

router.post('/posts', (req, res) => {
    posts.createPost(req.body.userId, req.body.title, req.body.content, function(error, results) {
        if (error) {
            res.status(500).send('Error creating post');
        } else {
            res.status(201).send('Post created');
        }
    });
});
router.get('/posts', (req, res) => {
    posts.getPosts(function(error, results) {
        if (error) {
            res.status(500).send('Error getting posts');
        } else {
            res.status(200).send(results);
        }
    });
});

router.post('/comments', (req, res) => {
    comments.createComment(req.body.userId, req.body.postId, req.body.comment, function(error, results) {
        if (error) {
            res.status(500).send('Error creating comment');
        } else {
            res.status(201).send('Comment created');
        }
    });
});

router.get('/comments', (req, res) => {
    comments.getComments(req.query.postId, function(error, results) {
        if (error) {
            res.status(500).send('Error getting comments');
        } else {
            res.status(200).send(results);
        }
    });
});

