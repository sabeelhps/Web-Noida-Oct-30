const router = require('express').Router();
const Food = require('../../models/food');




router.get('/allfoods', async (req, res) => {
    const foods = await Food.find({});
    res.json(foods);
});


module.exports = router;