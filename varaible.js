// we can declare varible in js by three ways
// 1. var keyword , 2. let keyword 3. const keyword

var x = 100 ; // global varaible.
console.log(x);

function display (){
    var y = 200;
    console.log(y);  // local variable

    for (var index = 0; index < 10; index++) {
        
    }
    console.log("I am var index", index);

}

display();
// console.log(y); var keyword give function level scope.

function showLet() {
    for (let index = 0; index < 10; index++) {
        
    }
    console.log(index);
}

let price = 20.820; // global varible.
console.log(price);
showLet();