var db = require('./dbconfig');

db.connect(function(err){
    if(err) throw err;

    let sql = "CREATE DATABASE belaajar_node";
    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("Database created!");
    });
});