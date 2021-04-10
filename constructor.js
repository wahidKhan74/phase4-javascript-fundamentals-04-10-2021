// constrctor : constructor in js is a function with allows us create dynamic objects
// constructor is the blueprint ( from same blueprint )
// bank account user obj
// var account = {
//     id : 1001,
//     name : "John Smith",
//     blanace : 30000.23,
//     email : "john.smith@gmail.com"
// };

// Account Constructor
function Account(id, name, blanace, email){
    this.id = id ;
    this.name = name;
    this.blanace = blanace;
    this.email = email;
}

// create objects of account type

var account1  = new Account(10001,"John Doe",700000,"joh.doe@gmail.com");
var account2  = new Account(10002,"Tony Stark",980000000,"tony.stark@gmail.com");
var account3  = new Account(10003,"Will Smith",975600000,"will.smith@gmail.com");
console.log(account1);
console.log(account2);
console.log(account3);
