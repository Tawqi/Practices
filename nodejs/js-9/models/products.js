const mongoose = require('mongoose')
// Load uuid packge
const { v4: uuidv4 } = require('uuid');
const productsShema = new mongoose.Schema({
    uid: {
    type: String,
    default: uuidv4  // 👈 generates unique ID automatically
    },
    name:{
        type: String,
        required: true,
        trim: true, 
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
    sizes:{
        type: [String],
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    description: {
        type:String,
        trim: true, 
    },
    stocks: {
        type:Boolean,
    },

})

const products = mongoose.model('products', productsShema)
module.exports = products;