


// function a() {
//     // console.log(this);
//     function b() {
//         console.log(this);
//     }
//     b();
// }

// a();

// Implicit  Binding
// const person = {
//     name: 'Kartik',
//     age: 23,
//     tellAge: function () {
//         console.log(this);
//     },
//     favColor: {
//         color: 'Blue',
//         tellFavColor: function () {
//             console.log(this)
//         }
//     }
// }


// // Explicit Binding


// function fun(name, age) {
//     console.log(this);
//     console.log(name);
//     console.log(age);
// }

// const a = {
//     l: 10,
//     m:true
// }

// const f = fun.bind(a);

// fun.call(a,'Kartik',23);

// . . . . . . . . 1000 lines of code 
// ... . . . .


// f('Kartik', 25);




// ------------------------------

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}


function Laptop(name,price,memory, processor) {
    Product.call(this, name, price);
    this.memory = memory;
    this.processor = processor;
}

const cheese = new Food('Pizza', 5);

const macbook = new Laptop('Macbook Air', 200000, 16, 'Intel');







