
// -----------HOF-------------


// function fun(func) {

//     func();
//     // console.log(func);
// }

// // function innerFun() {
// //     console.log('Inside innerfun');
// // }

// fun(function() {
//     console.log('Inside innerfun');
// });



// -------------------------------
// function fun() {
    
//     function innerFun() {
//         console.log('Inside inner fun');
//     }

//     return innerFun;
// }

// const f = fun();


// -------------------------------

function greaterThan(n) {
    
    return m=> n > m;
}


const greaterThan10 = greaterThan(10);

let greaterThan20 = greaterThan(20);


