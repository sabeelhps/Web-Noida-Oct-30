const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/',express.static(path.join(__dirname, 'public')));


const todos = ["Go to Gym", "Buy Vegetables", "Learn Web"];


app.get('/todos', (req, res) => {

  if (req.xhr) {
    console.log("AJAX REUQUEST");
    res.json(todos);
  }
  else {
    console.log("SSR");
    res.render('todo', { todos });
  }
});




app.listen(3000,()=>{
  console.log('server started at port 3000');
});