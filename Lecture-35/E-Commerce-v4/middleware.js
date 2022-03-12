const { productSchema, reviewSchema } = require('./schemas');
const Product = require('./models/product');
const Review = require('./models/review');


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to login first!');
        return res.redirect('/auth/login');
    }
    next();
}


module.exports.validateProduct = (req, res, next) => {
  
    const { name, price, desc, img } = req.body;
    const { error } = productSchema.validate({ name, price, img, desc });
   
    if (error) {
        const err = error.details.map((e) => e.message);
        const msg = err.join(',');
        req.flash('error', msg);
        return res.redirect('/error');
    }
    next();
}


module.exports.validateReview = (req, res, next) => {

    const { rating, comment } = req.body;

    const { error } = reviewSchema.validate({ rating, comment });

    if (error) {
        // creating array of all errors message available in error.details array
        const errMessages = error.details.map((e) => e.message);

        // joining all messages with comma(',')
        const msg = errMessages.join(',');

        // passing the error message to flash
        req.flash('error', msg);
        return res.redirect('/error');
    }
    next();

}


module.exports.isProductAuthor = async(req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    if (!(product.author && product.author.equals(req.user._id))) {
        req.flash('error', "You don't have permission to do that!");
        return res.redirect(`/products/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async(req, res, next) => {
    
    const { reviewid,productid } = req.params;
    const { username: currentUsername } = req.user;

    const review = await Review.findById(reviewid);
    
    if (!(review.author && review.author.length && review.author === currentUsername)) {
        req.flash('error', "You don't have permission to do that!");
        return res.redirect(`/products/${productid}`);
    }
    next();
}

