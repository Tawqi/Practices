const mongoose = require('mongoose')
const productSchema = new mongoose.Schema ({
    name: {
        type :String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    sizes :{
        type: [String],
        required: true,
    },
    colors: {
    type: [String],
    }
},{timestamps:true});

const Product = mongoose.model('products', productSchema)
module.exports = Product 
