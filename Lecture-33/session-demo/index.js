const express = require('express');
const app = express();
const session = require('express-session');



app.use(session({
    secret: 'weneedabettersecret',
    resave: false,
    saveUninitialized: true,
}));


app.get('/pagecount', (req, res) => {
    
    if (req.session.pagecount) {
        req.session.pagecount += 1;
    } else {
        req.session.pagecount = 1;
    }

    res.send(`You have viewed this page ${req.session.pagecount} times`);
})


app.get('/setname', (req, res) => {
    
    req.session.username = 'Sabeel';

    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    
    const { username } = req.session;

    res.send(`Hello from ${username}`);
});


app.get('/', (req, res) => {
    res.send("Hello");
});




app.listen(3000,()=>{
  console.log('server started at port 3000');
});