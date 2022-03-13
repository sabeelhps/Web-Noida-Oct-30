const Product = require('../models/product');
const Review = require('../models/review');

const getAllProducts=async(req, res) => {
    try {
        const products = await Product.find({});

        res.render('products/index', { products});
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
}





const createProductForm = (req, res) => {
    res.render('products/new');
}

const createProduct = async (req, res) => {
    try {

        const { name, price, desc, img } = req.body;

        await Product.create({ name, price, desc, img,author:req.user._id});
    
        req.flash('success', 'Product created successfully!');
        res.redirect('/products');
        
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
}


const showProduct =  async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('reviews');
        res.render('products/show', { product });
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
   
}

const getEditForm = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product })
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, img, desc } = req.body;
        await Product.findByIdAndUpdate(id, { name, price, img, desc });
        req.flash('success', 'Updated the product successfully!');
        res.redirect(`/products/${id}`);
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
   
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        req.flash('success', 'Product deleted successfully!');
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
   
}

const createReview = async (req, res) => {
    
    try {
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
            
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
    
    
}


const deleteReview = async (req, res) => {

    try {
        const { productid, reviewid } = req.params;
        await Review.findByIdAndDelete(reviewid);

        await Product.findByIdAndUpdate(productid, { $pull: { reviews:  reviewid } });
        
        res.redirect(`/products/${productid}`);
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    } 
}


module.exports.product = {
    getAllProducts,
    createProductForm,
    createProduct,
    showProduct,
    getEditForm,
    updateProduct,
    deleteProduct,
    createReview,
    deleteReview
}




