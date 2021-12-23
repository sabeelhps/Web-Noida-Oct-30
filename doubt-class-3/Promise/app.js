
// Creation of a promise
const p1 = new Promise(function (resolve, reject) {
    // resolve(100);
    // reject('Connection Failed');
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum % 2 === 0) {
        resolve(randomNum);
    } else {
        reject('Not a Even Number');
    }

});




// Consuming promise

p1.then((randomNum) => {
        console.log('Inside Resolve');
        console.log(randomNum);
    })
    .catch((err) => {
        console.log('Inside Catch');
        console.log(err);
    })



// function fun(num) {
    
//     if (num % 2 !== 0) {
//         throw new Error('Not a Even Number');
//     } else {
//         console.log(`YAYYY ${num} is a Even Number`);
//     }

// }

