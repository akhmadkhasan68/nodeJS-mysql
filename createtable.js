var db = require('./dbconfig');

db.connect(function(err){
    if(err) throw err;
    let sql = `CREATE TABLE user
    (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(200),
        username varchar(200),
        password varchar(200),
        PRIMARY KEY(id)
    )`;
    db.query(sql, function(err, res){
        if(err) throw err;
        console.log('table user created!');
    });
});