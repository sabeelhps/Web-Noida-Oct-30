const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const foodApi = require('./routes/apis/food');
const cors = require('cors');



mongoose.connect('mongodb://localhost:27017/food-order-app')
    .then(() => console.log("Connected"))
    .catch(() => console.log('Error!!!!'));


app.use(cors({
  origin:['http://localhost:3000']
}));


app.get('/', (req, res) => {
    res.json({ msg: 'Hello' });
});


app.use('/api/v1', foodApi);



app.listen(8080,()=>{
  console.log('server started at port 8080');
});