'use strict'

var mysql = require('mysql');

try {
    var con = mysql.createConnection({
        host: "localhost",
        user: "uasb_usr",
        password: "uasb**",
        database: "uasb_bdlibrary"
    });

    con.connect(function (err) {
        if (err) throw err;
        //Select all customers and return the result object:
        con.query("SELECT * FROM book", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
} catch (error) {
    console.log('No se puede conectar', error)
    process.exit(1)
}