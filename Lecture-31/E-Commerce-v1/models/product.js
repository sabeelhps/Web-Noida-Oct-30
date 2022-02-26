const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    desc: String
});


const Product = mongoose.model('Product', productSchema);


module.exports = Product;