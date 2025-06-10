const mongoose = require('mongoose')

const ProductsShema = new mongoose.Schema({
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
const Products = mongoose.model('products', ProductsShema);
module.exports = Products;