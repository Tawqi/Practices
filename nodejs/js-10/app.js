const express = require("express")
const app = express()
const path = require("path");
const mongoose = require("mongoose");
app.use(express.static('public'));
require('dotenv').config()
// Middleware that allows the server to read data sent from the user  using post method.
app.use(express.urlencoded({ extended: true }));

const MDBURL = process.env.MDBURL;
mongoose.connect(MDBURL)
.then(app.listen('3000', console.log('Its running')))
.catch(err => console.log(err))

app.get('/login', (req,res)=> res.sendFile(path.join(__dirname, 'public', 'login.html')))
app.get('/signup', (req,res)=> res.sendFile(path.join(__dirname, 'public', 'singup.html')))

app.get('/signingup', (req,res) => {
    
})




