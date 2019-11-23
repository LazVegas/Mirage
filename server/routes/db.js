const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: '',
    database: 'mirage',
    host: 'localhost'
})

module.exports = pool