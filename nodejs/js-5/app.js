const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const User = require('./models/users')

app.use(express.static('public'))

const userdataURL = 'mongodb+srv://Tawqi:pass0@cluster0.weqclte.mongodb.net/js-4?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(userdataURL)
    .then(()=>app.listen(3000,()=> console.log('Its running')))
    .catch(err => console.log(err))

app.get('/',(req,res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/userdata', (req, res) => {
  User.find()
    .then(data => res.json(data)) // Sends a responce as Json back to the server 
    .catch(err => res.status(500).send('Error fetching users'));
});

