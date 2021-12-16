var mysql = require('mysql2');
var connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'avalicao_dois'
});

module.exports = connectionDB