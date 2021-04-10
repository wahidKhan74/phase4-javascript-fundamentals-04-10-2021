// Account Constructor
function Account(id, name, blanace, email){
    this.id = id ;
    this.name = name;
    this.blanace = blanace;
    this.email = email;
}

// add properties
Account.prototype.state = "TS";
Account.prototype.city = "Hyderbad";

// add methods within prototype
Account.prototype.showBalance = function showBalance(){
    console.log(this.blanace);
}

var account1 = new Account(10001,"John Doe ",79999,"john.doe@gmail.com");
var account2 = new Account(10002,"Marry Smith ",96754999,"marry.smith@gmail.com");

console.log(account1);
console.log(account2);



//access protype based function and properties
console.log("Account 1 Name " , account1.name);
console.log("Account 1 City " , account1.city);
console.log("Account 1 State " , account1.state);

account1.showBalance();
account2.showBalance();

