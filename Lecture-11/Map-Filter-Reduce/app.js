

// function square(num) {
//     return num * num;
// }

// function squareRoot(num) {
    
//     return Math.sqrt(num);
// }


// const arr = [1, 2, 3, 4, 5];

// const squareOfArr = arr.map(square);
// const squareRootOfArr = arr.map(num=>Math.sqrt(num));

// console.log(squareOfArr);
// console.log(squareRootOfArr);


// ------------------------Filter------


// function checkEven(num) {
    
//     if (num % 2 === 0) {
//         return true;
//     }

//     return false;
// }


// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNums = arr1.filter(checkEven);

// console.log(arr1);
// console.log(evenNums);


// ------------------------Reduce-----------

// const arr2 = [1, 2, 3, 4, 5];

// const sum = arr2.reduce(function (currentSum,currentValue) {
    
//     return currentSum + currentValue;
// },0)


// console.log(sum);

// const cart = [{ name: 'Iphone11', qty: 2, price: 10 }, { name: 'Macbook', qty: 1, price: 20 }, { name: 'Ipad', qty: 2, price: 5 }];

// const totalAmount = cart.reduce(function (currentAmount, item) {


//     return currentAmount + item.qty * item.price;
// }, 0);

// console.log(totalAmount);


// ------------------------sort----------------------


// const arr4 = [1, 2, 3, 30, 10, 11];

// console.log(arr4);

// arr4.sort((a,b)=>b-a);

// console.log(arr4);

const cart1 = [{ name: 'Iphone11', qty: 2, price: 10 }, { name: 'Macbook', qty: 1, price: 20 }, { name: 'Ipad', qty: 2, price: 5 }];

console.log(cart1);

cart1.sort((a, b) => a.price - b.price);

console.log(cart1);