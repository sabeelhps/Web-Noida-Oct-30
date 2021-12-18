

// BAD PRACTICE
// function Car(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Car.prototype.getName=function () {
//     return this.name;
// }



// const c1 = new Car('BMW', 12345);
// const c2 = new Car('Audi', 999999);


// GOOD WAY

class Car{ //syntactical sugar in js

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Normal Method or Function
    getPrice() {
        return this.price;
    }

    // getter and setter method

    get getName() {
        return this.name;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }


}


const c1 = new Car('BMW', 12345);



// ---------------------Static Methods

class Point{
    
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    static description='This class represent a Point in Cartsean Plane'

    getXCoordinate() {
        console.log(this);
        return this.x;
    }

    static distance(a,b) {
        const dy = a.y - b.y;
        const dx = a.x - b.x;
        // console.log(this);
        return Math.hypot(dy, dx);
    }

}

const point1 = new Point(5, 5);
const point2 = new Point(10, 10);

// console.log(Point.distance(point1, point2));


// Inheritance in js


class Person{ //parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}


class Student extends Person{ //child class
    constructor(name, age, id, course) {
        super(name, age);
        this.id = id;
        this.course = course;
    }
}


const p1 = new Person('Garvit', 24);

const s1 = new Student('Vivek', 23, 237687, 'B-Tech');

console.log(s1);