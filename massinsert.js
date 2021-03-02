var db = require('./dbconfig');
var bcrypt = require('bcrypt');

db.connect(function(err){
    if(err) throw err;
    let sql = `INSERT INTO user (name, username, password) VALUES ?`;
    let values = [
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
        ['hasan', 'hasan68', bcrypt.hashSync('123123', 10)],
    ];

    db.query(sql, [values], function (err, res) {
        if(err) throw err;
        console.log(`number of record ${res.affectedRows}`);
    });
});