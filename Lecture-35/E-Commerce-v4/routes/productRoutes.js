const express = require('express');
const router = express.Router();
const { isLoggedIn,validateProduct,isProductAuthor,validateReview,deleteReview, isReviewAuthor } = require('../middleware');
const { product } = require('../controllers/product');


// GET all the products from the database
router.route('/')
    .get(product.getAllProducts)
    .post(isLoggedIn,validateProduct, product.createProduct);


router.get('/new',isLoggedIn, product.createProductForm);


router.route('/:id')
    .get(product.showProduct)
    .patch(isLoggedIn, validateProduct, isProductAuthor, product.updateProduct)
    .delete(isLoggedIn,isProductAuthor, product.deleteProduct);


router.get('/:id/edit',isLoggedIn,isProductAuthor, product.getEditForm);

// Add a review to particular product
router.post('/:productid/review', isLoggedIn, validateReview, product.createReview);


router.delete('/:productid/review/:reviewid', isLoggedIn,isReviewAuthor, product.deleteReview);

module.exports = router;