const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        min: 0,
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;