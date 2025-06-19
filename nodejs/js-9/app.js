const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const products = require('./models/products');
app.use(express.static('public'));

// Loads the .env file
require('dotenv').config();

app.use(express.json());

// This is a middleware that allows your Express server to read form data recived from the frontend when the form uses method="POST".
app.use(express.urlencoded({ extended: true }));

//Imports the variable from the .env file 
const MDBURL = process.env.MDBURL;

mongoose.connect(MDBURL)
.then(app.listen(3000, () => console.log('Its running')))
.catch(err => console.log(err))

app.get('/dashboard', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'))
})
app.get('/', (req,res) => {
    res.redirect('/dashboard')
})
app.get('/dashboardapi', (req,res) => {
    products.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).send("Error"))
})

app.post('/submit',(req,res)=> {
  const newProduct = new products({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    sizes: req.body.sizes.split(',').map(s =>s.trim()),
    colors: req.body.colors.split(',').map(s =>s.trim()),
    description: req.body.description,
    stocks: req.body.stocks === 'true'
  })
  newProduct.save()
    .then(() => res.status(200).send("Product has been added"))
    
    .catch( err => res.status(500).send("Error saving product"))
    
})

app.delete('/productdelete/:name', (req,res) => {
    products.findOneAndDelete({name: req.params.name})
    .then(() => {
        res.status(200)
        res.send("Product deleted")
    })
    .catch(err => res.status(500).send("Dlelete failed"))
})




app.put('/productedit/:uid', (req, res) => {
  const { name, category, price, sizes, colors, description, stocks } = req.body;

  // Basic validation
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  console.log('Updating product with uid:', req.params.uid); // Debug log
  console.log('Update data:', req.body); // Debug log

  products.findOneAndUpdate(
    { uid: req.params.uid }, // Use uid instead of name
    {
      name,
      category,
      price,
      sizes: sizes ? sizes.split(',').map(s => s.trim()) : [],
      colors: colors ? colors.split(',').map(s => s.trim()) : [],
      description,
      stocks: Boolean(stocks)
    },
    { new: true }
  )
    .then(updated => {
      console.log('Updated product:', updated); // Debug log
      if (!updated) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json({ message: 'Product updated', data: updated });
    })
    .catch(err => {
      console.error('Update error:', err);
      res.status(500).json({ message: 'Error updating product', error: err.message });
    });
});





