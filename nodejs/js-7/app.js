const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Products = require('./models/products')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

const dbURL = 'mongodb+srv://Tawqi:pass0@cluster0.weqclte.mongodb.net/js-4?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dbURL)
.then(()=> app.listen(3000, ()=> console.log('Its Listening')))
.catch(err => console.log(err))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/results', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'))
})

app.get('/search', (req, res) => {
  const q = req.query.search;

  if (!q) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  Products.find({ name: new RegExp(q, 'i') })
    .then(data => {

      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).json([]);
      }
    })

    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    });
});



app.get('/productpage/:name', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'))
})

app.get('/product/:name', (req,res) => {
    
    const urlname = req.params.name 

// new RegExp(`^${urlname}$`) Looks for exact matching words,
// 'i' makes it no care about if its uppercasre or lowercase letters

    Products.findOne({ name: new RegExp(`^${urlname}$`, 'i') }) 
    .then(data => {

      if (!data) { // If product not found 
        return res.status(404).json({ error: 'Product not found' });
      } 

      res.json(data); // else
    })
    .catch(err => res.status(500).json({ error: 'Error finding the product' }));
})