// console.log("Statement 1");
// console.log("Statement 2");
// console.log("Statement 3");  // time cosumming or blocking code
// console.log("Statement 4");
// console.log("Statement 5");

// callback 

console.log("Statement 1");
console.log("Statement 2");
setTimeout(function(){
    console.log("Statement 3");  // time cosumming or blocking code
},2000);
console.log("Statement 4");
console.log("Statement 5");

