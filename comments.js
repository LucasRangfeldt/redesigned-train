const db = require('./database.js')

function createComment(userId, postId, comment, callback) {
    const query = 'INSERT INTO comments (userId, postId, comment) VALUES (?, ?, ?)';
    db.query(query, [userId, postId, comment], callback);
}

function getComments(postId, callback) {
    const query = 'SELECT * FROM comments';
    db.query(query, callback);
}

function updateComment(commentId, comment, callback) {
    const query = 'UPDATE comments SET comment = ? WHERE id = ?';
    db.query(query, [comment, commentId], callback);
}

function deleteComment(commentId, callback) {
    const query = 'DELETE FROM comments WHERE id = ?';
    db.query(query, [commentId], callback);
}

module.exports = {
    createComment,
    getComments,
    updateComment,
    deleteComment
};