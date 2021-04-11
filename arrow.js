// fucntion expression
let showMessage = function () {
    console.log("Hello, Happpy Learning !");
};

//zero param, arrow function  // one line arrow fn
let showMessage1 = () => console.log("Hello, Happpy Learning ! == showMessage1 ");

// one param arrow function
let showMessage2 = (username) => {
    console.log("Hello ,",username);
};


// iife with arrow function
( () => {
    console.log(" I am a IIFE .");
})();

// two param arrow function
let showBalance = (user,balance) =>{
  return "Hi , user "+user +" Your balance is "+balance;
}

// showMessage();
showMessage1();
showMessage2("John Smith");
console.log(showBalance("John Smith",29322.4));