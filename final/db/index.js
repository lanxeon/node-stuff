const{ Pool } = require('pg');
{ user, host, database, password, port } = require('../secrets/db_config');

const pool = new Pool(
    { user, host, database, password, port }
);

pool.query('select * from monsters', (err, res) => {
    if(err) return console.log(err);

    console.log(res);
});