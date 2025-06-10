const express = require('express');
const server = express()

const {inventory, notinv} = require('./inventory.js') // Imports both arrays 

server.get('/inventory',(req,res) =>{
    res.json(inventory)
})

//turn incoming json data to JS objects
server.use(express.json())

//receives and saves the data to inventory
server.post('/inventory', (req,res) =>{ //Uses a post request
    const newItem = req.body; // Grabs the data from the request body and stores it const variable for use
    newItem.id = inventory.length + 1; //Automaticly sets and add new item ID according the length of the array 
    inventory.push(newItem); //Adds newItem to the end of the inventory array
    res.json({message:'product added', item:newItem}) // Sends response
})


//Data gets edited by the user
server.put('/inventory/:id', (req,res) =>{ // Uses a put request
    const id = Number(req.params.id); // Grabs the URL parameter(id) which is a string and converts it into a number.
    const item = inventory.find((item)=> item.id === id) // Searches for the item that has a matching id with the URL 

    if(!item) {
        res.status(404).json({message:'item not found'}) // Sends a error code if not found
    }else{
        Object.assign(item, req.body); // Update the existing data with the request body data
        res.json({message:'item updated',item}) // Sends response
    }
})


// Deletes a item using delete request
server.delete('/inventory/:id', (req,res)=>{
    const id = Number(req.params.id); // Takes the id from the URL (which is a string) and converts it into a number.
    const index = inventory.findIndex((item)=> item.id === id) // Searches for the item that has a matching id with the URL 

    if(index === -1){ // index is the position of a value in the array // -1 means a array that can't be found
        return res.json({message:'item not found'})
    }else{
        const deleteItem = inventory.splice(index,1)[0]; // Removes from the array
        res.json({ message: 'item deleted', item: deleteItem }); // Send response
    }
})

server.listen(3000,()=>{
    console.log('its running')
})
