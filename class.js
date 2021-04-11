class Person {

    // data members or  properties
    id;
    name;
    age;
    greet;

    // constructor
    constructor(id,name,age) {
        this.id= id;
        this.name= name;
        this.age= age;
    }

    // member function 
    printData() {
        console.log("Hi User "+this.name);
    }

    greet = function() {
        return " Hello";
    }

}

let person = new Person(101,"John Smith",29);
console.log(person.id);
person.printData();

console.log(person);
console.log(person.greet());

