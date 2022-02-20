const Product = require('./models/product');


const DUMMY_PRODUCTS = [
    {
        name: 'Iphone',
        price:100000
    },
    {
        name: 'Macbook',
        price:900000
    },
    {
        name: 'Earpods',
        price:200000
    },
    {
        name: 'IWatch',
        price:500000
    },

]



async function seedProducts() {
    await Product.deleteMany({});


    await Product.insertMany(DUMMY_PRODUCTS);

    console.log("Product SEEDED");
}


module.exports = seedProducts;