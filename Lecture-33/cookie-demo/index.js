const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');



app.use(cookieParser('this is not a good secret'));


app.get('/', (req, res) => {
    res.send("Hello")
});

app.get('/setcookie', (req, res) => {
    
    res.cookie('mode', 'dark',{httpOnly:true});
    res.cookie('username', 'sabeel');
    res.send("SENT YOU A COOKIE!!!!");
});


app.get('/viewcookie', (req, res) => {
    res.send(req.cookies);
})


app.get('/greet', (req, res) => {
    
    const { username } = req.cookies;

    res.send(`Hello from ${username}`);
});


app.get('/cart', (req, res) => {
   
    
    const cart = [{ name: 'Iphone', price: 200 }, { name: 'Mac', price: 400000 }];

    res.cookie('cart', JSON.stringify(cart));

    res.send("SET THE CART");
});

app.get('/setsignedcookie', (req, res) => {
   
    
    res.cookie('notification', 'on', { signed: true });
    res.cookie('fruit', 'apple', { signed: true });

    res.send("SENT YOU A SINGNED COOKIE");
}); 


app.get('/getsignedcookie', (req, res) => {
   
    console.log(req.signedCookies);

    res.send("SENT YOU A SINGNED COOKIE");
}); 




app.listen(3000,()=>{
  console.log('server started at port 3000');
});