//Arithmatic Calculator 
// function calculator(num1,num2,calcType){
//     if(calcType === "add"){
//         return num1 + num2;
//     } else if(calcType === "sub"){
//         return num1 - num2;
//     } else if(calcType === "mul"){
//         return num1 * num2;
//     } else if(calcType === "div"){
//         return num1 / num2;
//     }
// // }
// var response = calculator(200,100,"sub");
// console.log(response);


// callback based calculator
function calculator(num1,num2,callback){
    return callback(num1,num2)
}

function add(num1,num2) {
    return num1 + num2;
}

function sub(num1,num2) {
    return num1 - num2;
}

function div(num1,num2) {
    return num1 / num2;
}

function mul(num1,num2) {
    return num1 * num2;
}

function avg(num1,num2) {
    return num1 + num2 / 2;
}

function sIn(num1,num2) {
    return num1 * num2 / 2;
}

console.log("Addition 20 + 10: "+ calculator(20,10,add));
console.log("Substraction  20 - 10: "+ calculator(20,10,sub));
console.log("Multiplication  20 * 10: "+ calculator(20,10,mul));
console.log("Division  20 / 10: "+ calculator(20,10,div));
console.log("Avg  20  and 10: "+ calculator(20,10,avg));