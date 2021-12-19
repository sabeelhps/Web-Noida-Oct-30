

// creation of a promise
const p = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        if (randomNum % 2 === 0) {
            resolve(randomNum);
        } else {
            reject('Not a Even number');
        }
    }, 3000);
})


// Consuming a promise
p.then((randomNum) => {
    console.log('Number is Even')
    console.log(randomNum);
    })
    .catch((err) => {
        console.log('Number is oddd');
        // console.log(err);
    })