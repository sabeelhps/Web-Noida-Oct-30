const express = require('express');
const app = express();



// the function inside app.use will run for each incoming request
// app.use((req,res) => {
    
//     console.log("inside app.use");
    
//     res.send('<h1>Hello from Server!</h1>')
// });


// Routes
app.get('/', (req, res) => {
    res.send('<h1>This is the Root Route</h1>')
})

app.get('/cat', (req, res) => {
    res.send("MEEOOOWWW!!");
});

app.get('/dog', (req, res) => {
    res.send('<h1>Wooof Woof!!!</h1>')
});


app.get('*', (req, res) => {
    res.send('<h2>Invalid Url!!</h2>')
})



app.listen(3000, () => {
    console.log('Server running at port 3000');
});



