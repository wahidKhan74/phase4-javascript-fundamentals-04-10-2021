class Animal {

    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }

    run(speed){
        this.speed = speed;
        console.log("The speed is "+this.speed);
    }
}

class Rabbit extends Animal {
    eat() {
        console.log("Eat Carrot !");
    }
}

class Tiger extends Animal {
    eat() {
        console.log("Eat Human !");
    }
}

let rabbit = new Rabbit("A Rabbit",22993);
rabbit.run(2000);
rabbit.eat();
console.log(rabbit);

// console.log(new Animal("Tiger",29374));
