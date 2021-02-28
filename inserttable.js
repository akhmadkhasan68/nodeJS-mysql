const db = require('./dbconfig');
const bcrypt = require('bcrypt');

db.connect(function(err){
    if(err) throw err;
    let name = "Hasan";
    let username = "akhmadkhasan68";
    let password = bcrypt.hashSync('123asdf123', 10);

    let sql = `INSERT INTO user (name, username, password) 
                VALUES ('${name}', '${username}', '${password}')`;
    db.query(sql, function(err, res){
        if(err) throw err;
        console.log(res);
    });
});