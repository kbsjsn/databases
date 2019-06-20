// import { builtinModules } from 'module';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'chat'
})

connection.connect((err) => {
    if (err) throw (err);
    // connection.query("select * from messages", (err, result, fields) => {
    // //     // if (err) throw err;
    //     console.log(results)
    // })
    console.log('Database connected');
})

// connection.query('Query success??????', (err, rows, fields) => {
//     if (err) throw err

//     console.log('this is row', row[0].solution)
// })


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports = connection;

