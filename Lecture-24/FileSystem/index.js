const fs = require('fs');
const path = require('path');


const data = "Writing file using Node.js";

// console.log(process.cwd());
// console.log(__dirname);


const F1 = path.join(__dirname,'files','def.txt');

// fs.writeFile(F1,data,(err)=>{
//     if(err) throw new Error('Cannot write at the moment');
//     console.log("File Written Successfully");
// });


fs.readFile(F1,(err,data)=>{
    if(err) throw new Error('Cannot write at the moment');
    console.log(data.toString());
});