const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))


let comments = [
  { id:uuid(), author: 'dog', comment: 'Woof Woof' },
  { id:uuid(), author: 'cat', comment: 'Meeooowww' }
];


// List all the comments
app.get('/comments', (req, res) => {
  res.render('index', { comments });
});



// Get a form to create a new comment
app.get('/comments/new', (req, res) => {
  res.render('new');
});


// Creating a new comment in comments array
app.post('/comments', (req, res) => {
  const { author, comment } = req.body;
  comments.push({ id:uuid(), author, comment });
  res.redirect('/comments');
});


// display a particular comment
app.get('/comments/:commentid', (req, res) => {
  const { commentid } = req.params;
  const foundComment = comments.find((c) => c.id === commentid);
  res.render('show', { c: foundComment });
});

// Getting a edit form
app.get('/comments/:commentid/edit', (req, res) => {
  const { commentid } = req.params;
  const foundComment = comments.find((c) => c.id === commentid);
  res.render('edit', { c: foundComment });
});


// Updating a particular comment
app.patch('/comments/:commentid', (req, res) => {
  const { commentid } = req.params;
  const foundComment = comments.find((c) => c.id === commentid);
  foundComment.author = req.body.author;
  foundComment.comment = req.body.comment;
  res.redirect('/comments');
});


// Delete a particular comment
app.delete('/comments/:commentid', (req, res) => {
  const { commentid } = req.params;
  const newComments = comments.filter((c) => c.id !== commentid);
  comments = newComments;
  res.redirect('/comments');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});