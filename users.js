const db = require('./database.js')

function createUser(username, password, role, callback) {
    const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
    db.query(query, [username, password, role], callback);
}

function getUser(username, callback) {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], function(error, results) {
        if (error) {
            callback(error);
        } else {
            callback(null, results[0]);
        }
    });
}

function updateUser(username, password, role, callback) {
    const query = 'UPDATE users SET password = ?, role = ? WHERE username = ?';
    db.query(query, [password, role, username], callback);
}

function deleteUser(username, callback) {
    const query = 'DELETE FROM users WHERE username = ?';
    db.query(query, [username], callback);
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
};