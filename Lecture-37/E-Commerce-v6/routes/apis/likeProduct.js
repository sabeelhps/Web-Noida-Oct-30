const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/user');





router.post('/user/:productid/like', async (req, res) => {
    
    const { productid } = req.params;

    res.status(200).json({ id: productid, message: 'Liked the product Successfully' });
})



module.exports = router;