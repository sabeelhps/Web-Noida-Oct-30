const mongoose = require('mongoose');
const Review = require('./review');



const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    desc: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});



// Mongoose Middlware to delete reviews corresponding to particular product
productSchema.post('findOneAndDelete', async function (product) {
    await Review.deleteMany({ _id: { $in: product.reviews } });
});



const Product = mongoose.model('Product', productSchema);


module.exports = Product;