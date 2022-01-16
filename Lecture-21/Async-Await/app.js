

// async function add(x, y) {
    
//     if ((x + y) % 2 !== 0) {
//         throw new Error('sum of x and y is not even');
//     }


//     return x + y;
// }


// add(4, 4)
//     .then((data) => {
//         console.log('Inside Resolve')
//         console.log(`Sum is : ${data}`);
//     })
//     .catch((err) => {
//         console.log('Inside Catch block');
//         console.log(err);
//     });



async function getData() {
    
    console.log('Starting to fetch the data');
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');

    console.log('Got the data from fetch');
    
    console.log('starting to parse the data');
    const data = await res.json();

    console.log('Printing the data after parsing it into json');
    console.log(data.ticker.price);

    console.log('getData function ends here.......');

}

getData();


// 10000000.....lines of code
console.log('After getData function call')
console.log('After getData function call')
console.log('After getData function call')
console.log('After getData function call')
console.log('After getData function call')