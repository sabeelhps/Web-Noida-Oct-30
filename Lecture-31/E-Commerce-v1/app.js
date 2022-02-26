const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');


mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log(err));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const productRoutes = require('./routes/productRoutes');



app.get('/', (req, res) => {
    res.render('index');
});



app.use(productRoutes);




app.listen(3000,()=>{
  console.log('server started at port 3000');
});