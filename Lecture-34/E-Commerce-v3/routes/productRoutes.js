const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn } = require('../middleware');


// GET all the products from the database
router.get('/products', async (req, res) => {
    
    const products = await Product.find({});

    res.render('products/index', { products});
});


// GET the form to create a new product
router.get('/products/new',isLoggedIn, (req, res) => {
    res.render('products/new');
});

// POST - create new product in database
router.post('/products',isLoggedIn, async (req, res) => {
    const { name, price, desc, img } = req.body;

    await Product.create({ name, price, desc, img });

    req.flash('success', 'Product created successfully!');
    res.redirect('/products');
});


// Show particular product from the database
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id).populate('reviews');

    res.render('products/show', { product });
});

// Show the edit form
router.get('/products/:id/edit',isLoggedIn, async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render('products/edit', { product })
});

// Update the particular 
router.patch('/products/:id',isLoggedIn, async (req, res) => {
    const { id } = req.params;

    const { name, price, img, desc } = req.body;

    await Product.findByIdAndUpdate(id, { name, price, img, desc });

    req.flash('success', 'Updated the product successfully!');
    res.redirect(`/products/${id}`);
});


// Delete particular product from the database
router.delete('/products/:id',isLoggedIn, async (req, res) => {
    
    const { id } = req.params;

    await Product.findByIdAndDelete(id);


    req.flash('success', 'Product deleted successfully!');
    res.redirect('/products');
});


// Add a review to particular product
router.post('/products/:productid/review',isLoggedIn, async(req, res) => {
    
    const { productid } = req.params;
    const { rating, comment } = req.body;

    // finding the product to add review
    const product = await Product.findById(productid);

    // creating a new review with given rating and comment
    const review = new Review({ rating, comment,author:req.user.username });

    // adding a review to reviews array of a product
    product.reviews.push(review);
    
    // saving the review in a database

    await review.save();

    // saving the product in a database
    await product.save();


    req.flash('success', 'Review created successfully!');
    res.redirect(`/products/${productid}`);
})

module.exports = router;