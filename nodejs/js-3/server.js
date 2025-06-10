const express = require('express');
const path = require('path'); // Loads the path package/module
const server = express();


server.get('/',(req,res) => { 
    res.sendFile(path.join(__dirname, 'views', 'index.html')) // __dirname = current folder // Send the HTML the users 
})
// Redirects the '/home' URL to '/' URL
server.get('/home',(req,res) => { 
    res.redirect('/')
})
// 404 page // This must be at the end of the file or else other URL will show 404  
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
});

server.listen(3000,()=> {
    console.log('Its running ✅')
})