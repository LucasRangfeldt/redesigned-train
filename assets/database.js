const mysql = require('mysql');
require('dotenv').config({ path: 'C:\\Users\\lucas\\Documents\\GitHub\\redesigned-train\\.env' });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'lucasdata'
});

connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});
connection.end();


