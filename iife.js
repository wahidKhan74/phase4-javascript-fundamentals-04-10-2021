(function(){
    console.log("I am Imedialy Invoked function expressions");
})();


// self executing anonymous function
(function(){
   //data privosy
    let username= "John Smith";
    console.log(username);
    
    function display(name){
        console.log("Hello User, ",name);
    }
    display(username);
})();