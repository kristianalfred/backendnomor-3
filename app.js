const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'kristian',
    password : '1234',
    database : 'toko',
});

db.connect();
 
app.listen(3000,()=>{
    console.log('Server @port 3000')
});

var sql ='SELECT* From Karyawan';
db.query(sql,(err, result)=>{
    if(err) throw err;
    console.log(result);
});

db.end();