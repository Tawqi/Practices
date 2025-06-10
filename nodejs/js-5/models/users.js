const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
    }
})
const User = mongoose.model('user', usersSchema)
module.exports = User