

function fun() {
    console.log('Inside Fun');
}

// function delay(n) {
   

//     for (let i = 1; i <= n; i++){
//         const startTime = new Date().getTime();
//         while (new Date().getTime() < 1000 + startTime) { }  
//     }

// }


// console.log('START');

// setTimeout(function cb() {
//     let a = 100;
//     console.log('Callback');
//     fun();
// }, 10000);

// console.log('END');



const id1 = setInterval(() => {
    console.log('Inside set interval')
}, 1000);


const id2=setTimeout(() => {
    clearInterval(id1);
}, 5000);

