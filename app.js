const express = require('express');
const {response} = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/users', (req, res) => {
//     // console.log('___________-');
//     // console.log(req);
//     // console.log('___________-');
//
//     res.json('Get all users');
// });
//
// app.post('/users', (req, res) => {
//     res.json('Create Users');
// });
//
// app.put('/users/1', (req, res) => {
//     res.json('Apdate users');
// });

// app.delete('/users/8');

const userRouter = require('./routes/user.router');

app.use('/users', userRouter)

app.listen(5000, ()=>{
    console.log(`App listen 5000`)
})