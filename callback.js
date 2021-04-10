// callback : When a function is passed to argument to another function is callback
// callback are used in asynchronous programming

function functionOne(x){
    console.log(x);
}

function functionTwo(){
    console.log("I am new callback function");
}

// ppasing a function(body) argument to another function it is a callback function.
functionOne(functionTwo);