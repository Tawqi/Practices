// Very importent 2 lines when using Express(Freamework) with NodeJS
const express = require('express'); // Loads the Express Framework
const server = express(); 

//imports the products.js file data to here
const products = require('./products.js')


// res = sending from server
// req = reciving to server

// Sends the product.js data in json(format) as a responce to the user when visited the page with '/product' at the end 
server.get('/products',(req,res) =>{ // Uses a get request
    res.json(products)  // this is the responce
})

//Listens to port 3000 (sets up the port) 
server.listen(3000,()=> {
    console.log('it running ig')
})