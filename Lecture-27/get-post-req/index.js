const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// It parses the request body to get the data which is undefined by default
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
    res.render('form');
});


app.get('/user', (req, res) => {
    
    const { username, age } = req.query;

    res.send(`Hello this is GET REQUEST sent by ${username}${age}`);
});


app.post('/user', (req, res) => {
    
    console.log(req.body);

    res.send("POST REQUEST");
});



app.listen(3000,()=>{
  console.log('server started at port 3000');
});