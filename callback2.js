function x() {
    console.log("I am fn called from inside a function");
}

function y(callback){
    console.log(" Do Somthing !");
    callback();
}

// callback function
y(x);