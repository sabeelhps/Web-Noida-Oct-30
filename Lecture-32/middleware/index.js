const express = require('express');
const app = express();




app.use((req, res, next) => {
    req.username = 'Sabeel';
    console.log("My First Middleware");
    return next();
    console.log("Inside First Middleware after calling NEXT()");
});


app.use((req, res, next) => {
    console.log("My Second Middleware");
    next();
});


const verify = (req, res, next) => {
    
    const { password } = req.query;

    if (password === 'apple') {
        return next();
    }

    res.send("Inavalid Password");
}


app.get('/', (req, res) => {

    res.send("Hello");
});

app.get('/greet', (req, res) => {
    
    const { username } = req;
    res.send(`Hello from ${username}`);
});


app.get('/secret',verify, (req, res) => {
    
    res.send("Sometime i wear headphone in public so that i dont have to talk anyone!!")
})




app.listen(3000,()=>{
  console.log('server started at port 3000');
});