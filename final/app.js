const express = require('express');

const app = express();
const pool = require('./db/index');

app.get('/monsters', (req, res) =>{
    pool.query('select * from monsters order by mid asc', (err, result) => {
        if(err) return console.log(err);
    
        res.json(result.rows);
    });
}
);

module.exports = app;