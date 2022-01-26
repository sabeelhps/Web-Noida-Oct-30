

console.log("Hello from Node.js");


const arr = ['Grapes', 'Mango', 'Orange'];

console.log(arr);


function add(x, y) {
    console.log(x + y);
}

add(3, 4);

const obj = {
    name: 'Sabeel',
    age:23
}


const newObj = { ...obj }


console.log(obj);
console.log(newObj);


const fruits = [{ name: 'Orange', qty: 10 }, { name: 'Apple', qty: 5 }];

for (const item of fruits) {
    console.log(`Quantity of ${item.name} is ${item.qty}`);
}


