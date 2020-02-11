const express = require('express');

const app = express();
const pool = require('./db/index');

app.get('/monsters', (req, res, next) =>{
    pool.query('select * from monsters order by mid asc', (err, result) => {
        if(err) return next(err);
    
        res.json(result.rows);
    }
    );
}
);

app.get('/monsters/:id', (req, res, next) =>{

    const { id } = req.params;
    console.log(id);

    pool.query('select * from monsters where mid=$1',[id],(err,result) =>{
        if(err) return next(err);

        res.json(result.rows);
    });
});

app.use((err,req,res,next) => {
    res.json(err);
});

module.exports = app;