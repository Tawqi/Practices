const mongoose = require('mongoose')
const bcrypt = require('bcrypt'); // For hashing passwords

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
    type: String,
    required: true
    },
},
{ timestamps: true })

const users = mongoose.model('users', userSchema);
module.exports = users;