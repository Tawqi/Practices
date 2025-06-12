const mongoose = require('mongoose')

const productsShema = new mongoose.Schema({
     name:{
        type: String,
        required: true,
        trim: true, 
    },
    image: {
        type: String,
        required: true,
    },
    sizes:{
        type: [String],
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    }
},{timestamps:true})

const products = mongoose.model('products', productsShema)
module.exports = products;