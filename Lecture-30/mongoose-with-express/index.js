const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');

const seedProducts = require('./seed');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost/shop-app')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("Something went wrong"));


// seedProducts();


app.get('/products', async(req, res) => {
    
    const products = await Product.find({});

    res.render('index', { products });
})








app.listen(3000,()=>{
  console.log('server started at port 3000');
});