const express = require('express');
const app = express();
const path = require('path');


// You are telling express to use ejs as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// You are telling express that all files are stored in public folder
app.use(express.static(path.join(__dirname, 'public')));



const todos = ["Go to Gym", "Buy Groceries", "Buy Vegetables", "Watch Movies"];


app.get('/', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    
    res.render('home', { randomNum });
});


app.get('/math', (req, res) => {
    res.render('math');
});



app.get('/todos', (req, res) => {
    const name = "Sabeel";
    res.render('todos', { todos, name });
});





app.get('/r/:subredit', (req, res) => {
    
    const {subredit } = req.params;

    res.render('subredit',{subredit})
});



app.listen(3000,()=>{
  console.log('server started at port 3000');
});