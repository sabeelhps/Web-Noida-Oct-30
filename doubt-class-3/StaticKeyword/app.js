

class Person{

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    static bestFriend = 'Vivek';

    static getAge() {
        console.log(this.bestFriend);
        // YOU CAN ACCESS ONLY STATIC PROPERTIES OF A CLASS USING 'this' keyword
        return this.age;
    }

    newMethod() {
        // IF cannont access a static property or a method from a non static method
        return this.bestFriend;
    }

}

const p1 = new Person('Kartik', 23);
