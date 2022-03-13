const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const User = require('../models/user');



router.get('/user/cart',isLoggedIn, async (req, res) => {

    const userid = req.user._id;
    const user = await User.findById(userid).populate('cart.item');

    const totalAmount = user.cart.reduce((currentSum,product) => currentSum + product.item.price * product.qty, 0);    


    res.render('cart/cart',{user,totalAmount});
});



router.post('/user/:productid/cart', isLoggedIn, async (req, res) => {
   
    const { productid } = req.params;
    const userid = req.user._id;

    const user = await User.findById(userid);

    const isPresent = user.cart.some((product) => product.item.equals(productid));

    if (isPresent) {
        const newCartArray = user.cart.map((product) => {
            return product.item.equals(productid) ? { item:product.item, qty: product.qty + 1 } : product;
        });
        user.cart.splice(0, user.cart.length);
        user.cart.push(...newCartArray);
        await user.save();
    } else {
        user.cart.push({ item: productid });
        await user.save();
    }
    
    res.redirect('/user/cart');
});







module.exports = router;