const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');



mongoose.connect('mongodb://localhost/authDemo')
    .then(() => console.log("CONNECTION OPEN!"))
    .catch((err) => console.log(err));




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'weneedabettersecret',
    resave: false,
    saveUninitialized: true,
}));


const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');   
    }
    next();
}

const isLoggedIn = (req, res, next) => {
    if (req.session.user_id) {
        return res.redirect('/secret');
    }
    next();
}


app.get('/register',isLoggedIn, (req, res) => {
    res.render('signup');
});


app.post('/register',isLoggedIn, async(req, res) => {
    
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password,salt);

    const newUser = new User({ username, password: hash });
    await newUser.save();
    res.redirect('/login');
});


app.get('/login',isLoggedIn, (req, res) => {
    res.render('login');
});


app.post('/login',isLoggedIn, async (req, res) => {
    
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        console.log("Username is Incorrect");
        return res.redirect('/login');
    }

    const validUser = await bcrypt.compare(password, user.password);

    if (!validUser) {
        console.log("Invalid Password");
        return res.redirect('/login');
    }


    req.session.user_id = user._id;

    res.redirect('/secret');
});

app.get('/logout', (req, res) => {
    
    req.session.destroy();

    res.redirect('/login');
})

app.get('/secret',requireLogin, (req, res) => {
    res.send('This is a secret.You need to login first to see it!');
});


app.get('/topsecret', requireLogin, (req, res) => {
    res.send("This is top secret");
});



app.listen(3000,()=>{
  console.log('server started at port 3000');
});