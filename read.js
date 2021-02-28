var db = require('./dbconfig');

db.connect(function(err, res){
    if(err) throw err;
    let sql = "SELECT * FROM user";
    db.query(sql, function(err, res){
        if(err) throw err;
        console.log(res)
    })
});