

// Contructor Function
function Person(name, age) {
   
    this.name = name;
    this.age = age;
    // console.log(this);
  
}


Person.prototype.speak=function () {
    console.log(`My name is ${this.name}`);
}

let p1 = new Person('Vivek', 23);
const p2 = new Person('Kartik', 25);