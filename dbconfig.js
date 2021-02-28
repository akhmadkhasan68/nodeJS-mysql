var mysql = require('mysql');
var db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123a123" ,
    database: "belaajar_node"
});

module.exports = db;
