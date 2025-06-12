const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')

app.use(express.static('public'))

// This is a middleware that allows your Express server to read form data sent from the frontend when the form uses method="POST".
app.use(express.urlencoded({ extended: true }));

const dbURL = 'mongodb+srv://name:password@cluster0.weqclte.mongodb.net/js-4?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dbURL)
.then(()=> app.listen(3000, ()=> console.log('Its running')))
.catch(err => console.log(err))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// Recives the input datas from the frontend via pose req and saves to database  
app.post('/submit',(req,res)=> { 
    const newproduct = new Product({
        name: req.body.name, // Gets the input data from the req body via the name of the input 
        image: req.body.img, // Gets the input data from the req body via the name of the input 
        sizes: req.body.sizes.split(',').map(s =>s.trim()), // Splits the string into and array  
        colors: req.body.colors.split(',').map(s => s.trim()),
    })
    newproduct.save()
      .then(() => res.send('product saved')) // ✅ use arrow function with no param
      .catch(err => {
        console.error(err); 
        res.status(500).send('Error saving product')});

})
