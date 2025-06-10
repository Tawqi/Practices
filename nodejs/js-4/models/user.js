const mongoose = require('mongoose'); // Loads the mongoose package/module

// Schema defines the structure of the database collection 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces from start and end
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Defines the model // mongoose.model('<collection-name>',<schema>)                                                           
const User = mongoose.model('user', userSchema); // This is a model

module.exports = User // Exports the model 