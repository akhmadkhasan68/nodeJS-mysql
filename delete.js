var db = require('./dbconfig');
db.connect(function(error){
    if(error) throw error;
    let id = 2;
    let sql = `DELETE FROM  user WHERE id = '${id}'`;
    db.query(sql, function(err, res){
        if(err) throw err;
        console.log(res);
    });
});