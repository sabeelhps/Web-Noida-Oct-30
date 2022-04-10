const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
});


module.exports = mongoose.model('Food', foodSchema);