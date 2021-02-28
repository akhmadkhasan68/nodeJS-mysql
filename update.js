var db = require('./dbconfig');

db.connect(function(err){
    if(err) throw err;
    let id = 2;
    let sql = `SELECT * FROM user WHERE id = '${id}'`;
    db.query(sql, function(err, res){
        if(err) throw err;  
        let name = 'Abdullah';
        let username = 'abdullah68';
        let sql = `UPDATE user SET name = '${name}', username = '${username}' WHERE id = '${id}'`
        db.query(sql, function(err, res){
            if(err) throw err;
            console.log('berhasil edit');
        });
    });
});