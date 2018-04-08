const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aharris',
  password: 'aharris',
  database: 'aharris'

});



router.get('/', function(err, res){
  connection.query('SELECT 1+3 as test1', (err, rows) => console.log(rows));
});

module.exports = router;
