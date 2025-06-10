 // https://youtu.be/bxsemcrY4gQ?si=hgtGxV2Ih0w6qVqU
const express = require('express');
const server = express();
const path = require('path');
const mongoose = require('mongoose'); // Loads the mongoose package/module
const User = require('./models/user'); // Imports user model 

//Lets the user access the other files in public folder like CSS and stuff or the frontend wont properly with everything 
server.use(express.static('public'));


// Link for the database as a variable
const userdataURL = 'mongodb+srv://Tawqi:pass0@cluster0.weqclte.mongodb.net/js-4?retryWrites=true&w=majority&appName=Cluster0'

// Connects to Database 
mongoose.connect(userdataURL)
    .then(()=> server.listen(3000,()=>{ console.log('Its running')})) // Listens for request after its connectd to the data base
    .catch(err => console.log('Connection error', err)) // Looks for any errors

server.get('/',(req,res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html')) 
})

// Send the data through the model and saves it 
server.get('/send', (req, res) => {

  const newuser = new User({ // Here the 'User' is the model

    name: 'Manush',
    password: 'something-pass',
    img: 'URL'
    
  });

  newuser.save() // Saves the new data

    .then((result) => {
      console.log('User saved:', result);
      res.send('User saved');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error saving user');
    });
});

server.get('/sendok', (req, res) => {
  
  User.find() // When finding you need to define the model(User)

  .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error saving user');
    });
})

// Finding a object by a key:value
const theuser = "Manush1"

server.get('/send1',(req,res) => {

  User.findOne({ name: theuser })
  
  .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error saving user');
    });
})
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404page.html'));
});