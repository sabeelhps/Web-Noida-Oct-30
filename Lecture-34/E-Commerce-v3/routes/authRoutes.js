const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');



// router.get('/fakeUser', async (req, res) => {

//     const user = new User({ username: 'max', email: 'max@gmail.com' });

//     const newUser = await User.register(user, '1234');

//     res.send(newUser);
// });


router.get('/auth/register', (req, res) => {

    res.render('auth/signup');
});

router.post('/auth/register', async (req, res) => {
    
    try {
        const { email, username, password } = req.body;

        const user = new User({ email, username });
    
        await User.register(user, password);
    
        req.flash('success', 'Signed up successfully!');
        res.redirect('/auth/login');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/auth/register');
    }
});


router.get('/auth/login', (req, res) => {
    res.render('auth/login');
});

router.post('/auth/login', 
    passport.authenticate('local',
        {
            failureRedirect: '/auth/login',
            failureFlash: true
        }),
    (req, res) => {
        req.flash('success','Welcome back again!');
        res.redirect('/products');
    });


router.get('/auth/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Good Bye!!');
    res.redirect('/products');
})


module.exports = router;