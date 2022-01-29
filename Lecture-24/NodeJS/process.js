// It returns an array containing elements where
// first element is path where my node.js is installed
// const arr = process.argv;

// console.log(arr);



function greet(names){

    for(const name of names){
        console.log(`Hello from ${name}`);
    }
}


const names = process.argv.slice(2);

greet(names);


