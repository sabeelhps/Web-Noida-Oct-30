

let a = 10;
let b = 20;

// This is a comment

// if (a < b) {
//     console.log('b is greater');
// }

// if (a < b) {
//     console.log('a is less than b');
// } else {
//     console.log('a is greater than b');
// }

// let age = parseInt(prompt("Enter Your age"));

// console.log(typeof age);
// console.log(age);

// if (age < 18) {
//     alert('You cannot enter and drink!');
// }
// else if (age <= 21) {
//     alert('You can enter but you cannot drink!');
// }
// else {
//     alert('You can enter and drink!!');
// }


const password = prompt('Enter your password');


if (password.length < 6) {
    alert('Incorrect Password');
}
else if (password.includes(' ')) {
    alert('Incorrect Password.Contain spaces!!');
}
else if (password.indexOf('$') !== -1 || password.indexOf('@') !== -1 || password.indexOf('#') !== -1) {
    console.log('Correct Password');
}
else {
    alert('Wrong Password!!');
}

