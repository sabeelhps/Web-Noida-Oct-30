// SPREAD Operator

// const nums = [1, 2, 3, 4, 5];

// // console.log(Math.max(...nums));

// const newArr = [...nums,10,20,30,40];


// const obj = {
//     l: 10,
//     K:true
// }

// const newObj = {
//     ...obj,
//     name: 'Kartik',
//     favColor:'green'
// }


// REST Parameter

// function sum(...nums) {

//     // let total = 0;

//     // // for (let i = 0; i < arguments.length; i++){
//     // //     total += arguments[i];
//     // // }
//     // console.log(total);


//     return nums.reduce((total, current) => total + current);
// }


// console.log(sum(1, 2, 3, 4, 5));



// function fun(a,b,...nums) {
    
//     console.log(a);
//     console.log(b);
//     console.log(nums);



// }

// fun(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);



const colors = ['Orange', 'green', 'blue', 'purple'];


// const firstColor = colors[0];
// const secondColor = colors[1];

// Array destructuring
const [firstColor, secondColor] = colors;



const car1 = {
    name: 'BMW',
    price: 100000,
    color:'Black'
}

const car2 = {
    name: 'Audi',
    price: 99999,
    color: 'white',
    isDiskBrake:false
}


// const name = car.name;
// const price = car.price;

// const { name:newName, price,isDiskBrake=true} = car;
const { price,isDiskBrake=true,name:newName='Anonymous'} = car2;
