// function calling
// showMessage("Today is good day !");

// 1. function decleration
function showMessage(message){
    console.log(message);
}


// greeting("Tommorow is a wonderfull day !");
// 2.  function expression : the complete function (body ) is assign to variable
//  1. labled function expression
var greeting = function fetchMessage(message) {
    console.log(message);
}

//  1. anonymous function expression
var greeting2 = function (message) {
    console.log(message);
}



// console.log(greeting);
showMessage("Today is good day !");
greeting("Tommorow is a wonderfull day !")
greeting2("Hello , every one!")
