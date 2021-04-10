// function  :- JavaScript main bilding block for writing a specific task.

// function decleration or function defination 
function functionName(prameters) {
    // function body
}

// zero parameter function
function showMessage(){
    console.log("Hello, Welcome to JavaScript !");
}

// one parameter
function greeting(name){
    console.log("Hello, Today is a wonderfull day , ",name);
}

// multi param function
function fetchContent(name, age, gender) {
    console.log("Hello, user "+name+ ", your age is "+age+" , with gender "+gender);
}

// function return statement
function showBalace(){
    var balance = 20908834;
    return balance;
}

// function calling 

greeting("John Smith");
greeting();

fetchContent("Jennei Smith",29,"female");

var result = showMessage();
var response = showBalace();

console.log("The Balance : ",response );
console.log("The Result : ",result );

