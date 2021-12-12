

// const obj = {
//     l: 10,
//     m: 'Hello',
//     k: true,
//     say: function () {
//         console.log('Hello from function');
//     }
// }


const person = {
    name: 'Kartik',
    age:23
}

let p1 = Object.create(person);

let p2 = Object.create(p1);