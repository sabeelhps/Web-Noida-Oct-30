const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));



const comments = [
  { id:0, author: 'dog', comment: 'Woof Woof' },
  { id:1, author: 'cat', comment: 'Meeooowww' }
];



app.get('/comments', (req, res) => {
  res.render('index', { comments });
});


app.get('/comments/new', (req, res) => {
  res.render('new');
});


app.post('/comments', (req, res) => {
  const { author, comment } = req.body;
  comments.push({ id:comments.length, author, comment });
  res.redirect('/comments');
});


app.get('/comments/:commentid', (req, res) => {
  const { commentid } = req.params;
  const foundComment = comments.find((c) => c.id === parseInt(commentid));
  res.render('show', { c: foundComment });
});





app.listen(3000,()=>{
  console.log('server started at port 3000');
});