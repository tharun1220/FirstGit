const express = require('express');
const bodyParser = require('body-parser');
const fs =require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    fs.readFile('username.txt', (err, data) =>{
        if(err)
        {
            console.log(err);
            data = 'No chat exists';
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value) = localStorage.getItem('username')" action ="/" method ="POST">
    <input type ="text" name ="message" id ="message">
    <input type = "hidden" name = "username" id ="username">
    <br />
    <button type ="submit">Send</button></form>`);
    })
});
app.post('/', (req, res) =>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username} : ${req.body.message}`, {flag : 'a'}, (err)=>err? console.log(err):res.redirect('/'))
});

app.get('/login', (req, res) =>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action ="/login" method ="POST">
    <input type ="text" name ="title" placeholder = "username" id ="username">
    <br />
    <button type ="submit">Login</button></form>`)
});

app.post('/login', (req,res) =>{
    res.redirect('/');
})

app.listen(4000)