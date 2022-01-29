const fs = require('fs');
const path = require('path');


const F1 = path.join(__dirname,'inp1.txt');
const F2 = path.join(__dirname,'inp2.txt');
const F3 = path.join(__dirname,'output.txt');


fs.readFile(F1,(err,data)=>{
    // Reading first file i.e inp1.txt
    if(err) throw new Error("Something went wrong")
    const arr1 = data.toString().split('\n');
   

    // Once first file is available ,readind second file
    fs.readFile(F2,(err,data)=>{
        if(err) throw new Error("Something went wrong")
        const arr2 = data.toString().split('\n');

        // const arr3 = arr1.concat(arr2);
        const arr3  = [...arr1,...arr2];
        
        // using comparator function to sort in ascending order
        arr3.sort((a,b)=>a-b);
        
        const str = arr3.join('\n');

        fs.writeFile(F3,str,(err)=>{
            if(err) throw new Error("Something went wrong in writing file")
            console.log("File Written Successfullyy");
        })
    })  
});


