const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const seedDB = require('./seed');
const Blog = require('./models/blog');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


// Connecting to database
connectDB();


// seedDB();


app.get('/blogs', async (req, res) => {
    const blogs = await Blog.findAll();
    res.render('index', { blogs });
});








app.listen(3000,()=>{
  console.log(`server started at port http://localhost:3000`);
});