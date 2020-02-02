const fs = require('fs');
const express = require("express");
const user = require('./data/user');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//function for writing to file
const wf = (value) => {
    fs.writeFile('./data/user.json', JSON.stringify(value), err => console.log(err));
}

app.get('/users',(req,res)=>{
    res.json(user);
    res.end();
});

app.get('/users/random', (req,res) => {
    res.json(user[Math.floor(Math.random()*user.length)]);
    res.end();
});

app.get('/users/:id', (req,res) => {
    //res.json(user[parseInt(req.params.id)-1]);  kind of does the same thing but better to use find incase id is not sequential and incremented
    res.json(user.find(u => u.id === parseInt(req.params.id)));//better to use === with strict checking instead of == with loose checking
});

app.post('/users', (req,res) => {
    //console.log(req.body)
    
    const { name , blood_group, d1, d2, d3 } = req.body;

    const newUsers=user.concat({
                                id: (Math.max(...user.map(u => u.id)))+1, name, blood_group, d1, d2,d3
                            });

    wf(newUsers);
    res.json(newUsers);
})

app.put('/users/:id', (req,res)=>{
    const { id } = req.params;

    const old_user=user.find(f => f.id == id);//sets a reference so can use it directly to reflect changes in user

    ['name','blood_group','d1','d2','d3'].forEach(key => {
        if(req.body[key]) old_user[key]=req.body[key];
    });

    wf(user);
    res.json(user);
});

app.delete('/users/:id', (req,res)=>{
    const { id } = req.params;
    const new_user=user.filter(f => f.id!=id);

    wf(new_user);
    res.json(new_user);
});


//optional:pass multiple shit at 1 time
app.post('/users/multiple', (req,res) => {
    var newUsers = user;
    
    req.body.forEach( userx => {
        const { name , blood_group, d1, d2, d3 } = userx;

    newUsers=newUsers.concat({
                                id: (Math.max(...newUsers.map(u => u.id)))+1, name, blood_group, d1, d2,d3
                            });

    wf(newUsers);
    });

res.json(newUsers);
});

module.exports=app;