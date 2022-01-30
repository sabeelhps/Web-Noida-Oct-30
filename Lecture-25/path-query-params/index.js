const express = require('express');
const app = express();


// path parameter
app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;

    res.send(`<h1>This is ${subredit} Page!!</h1>`)
});



// query params
app.get('/search', (req, res) => {
    
    const { q } = req.query;
    
    res.send(`<h1>You are searching ${q}</h1>`);
});

app.get('/search/:movie', (req, res) => {
    
    const { movie } = req.params;


    res.send(`You are searching for ${movie}`);
})




app.listen(3000,()=>{
  console.log('server started at port 3000');
});