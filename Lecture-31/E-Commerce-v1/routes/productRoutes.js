const express = require('express');
const router = express.Router();
const Product = require('../models/product');




router.get('/products', async (req, res) => {
    
    const products = await Product.find({});

    res.render('index', { products });
})





module.exports = router;