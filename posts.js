const db = require('./database.js');

function createPost(userId, title, content, callback) {
    const query = 'INSERT INTO posts (userId, title, content) VALUES (?, ?, ?)';
    db.query(query, [userId, title, content], callback);
}

function getPosts(callback) {
    const query = 'SELECT * FROM posts';
    db.query(query, callback);
}

function updatePost(postId, title, content, callback) {
    const query = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
    db.query(query, [title, content, postId], callback);
}

function deletePost(postId, callback) {
    const query = 'DELETE FROM posts WHERE id = ?';
    db.query(query, [postId], callback);
}

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost
};

