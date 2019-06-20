var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'chat'
})

connection.connect((err) => {
    if (err) return console.log(err);
    console.log('Database connected');
})

// connection.query('Query success??????', (err, rows, fields) => {
//     if (err) throw err

//     console.log('this is row', row[0].solution)
// })

connection.end()
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


