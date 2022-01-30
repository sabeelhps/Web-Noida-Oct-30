const fs = require('fs');
const path = require('path');


const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');
const F3 = path.join(__dirname, 'output.txt');


function readF1() {
    
    return new Promise((resolve, reject) => {
        fs.readFile(F1, (err, data) => {
            if (err) throw new Error('Error!!');
            resolve(data.toString().split('\n'));
        })
    })
}


function readF2() {
    
    return new Promise((resolve, reject) => {
        fs.readFile(F2, (err, data) => {
            if (err) throw new Error('Error!!');
            resolve(data.toString().split('\n'));
        })
    })
}


function writeF3(data) {
    
    return new Promise((resolve, reject) => {
        
        fs.writeFile(F3, data, (err) => {
            if (err) throw new Error("Error while writing a file");
           
            resolve();
        })
    })
}

let arr3 = [];

readF1()
    .then((arr1) => {
        arr3 = arr1;
        return readF2();
    })
    .then((arr2) => {
        arr3 = arr3.concat(arr2);
        arr3.sort((a, b) => a - b);
        let data = arr3.join('\n');
        return writeF3(data);
    })
    .then(() => {
        console.log('Data Written Sucessfully');
    })
    .catch((err) => {
        console.log(err);
    });