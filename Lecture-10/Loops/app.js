// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// for loop ----------------------------------


// for (initilisation;condition-check;updation) {
    
// }

// let i;

// for (i = 1; i <= 10; i++){
//     // work you want to do...
//     console.log(i)
// }


// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }


// for (let i = 100; i >= 10; i = i - 10){
//     console.log(i);
// }
// let i = 1;

// for (; i <= 5;){
//     console.log(i);
//     i++;
// }


// for (let i = 1; i <= 3; i++){
//     for (let j = 1; j <= 3; j++){
//         console.log(i, j);
//     }
// }

// for (let i = 1; i <= 10; i++){
  
//     if (i === 5) {
//         break;
//     }
//     console.log(i);

// }

// for (let i = 1; i <= 10; i++){
  
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);

// }



// while loops ----------------------

// while (condition) {
//     // do your work here
// }

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// ------------------for of Loops------------
    
// const fruits = [{ item: 'Orange', qty: '2' }, { item: 'Apple', qty: '3' }, { item: 'Guava', qty: '5' }];

// for (let fruit of fruits) {
//     console.log(`You are buying ${fruit.qty} kg of ${fruit.item}`);
// }


// const str = 'Welcome!';

// for (let char of str) {
//     console.log(char);
// }



// ------------------------for in loop

// const car = {

//     name: 'BMW',
//     price: 100,
//     color:'Black'

// }

// for (let i in car) {
//     console.log(`${i}--->${car[i]}`)
//  }

let n = 7;

for (let i = 1; i <= n; i++){
    let str = "";
    for (let j = 1; j <= i; j++){
        str += '* ';
    }
    console.log(str);
}