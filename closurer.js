var firstName = "John" ; // global varible

function fullName() {
    var lastName = "Smith"; // outer varaible

    // nested function or closures function
    function join() {
        var middleName ="William";  // inner varaible;
        return firstName + " "+ middleName + " "+ lastName ;
    }

    return join();

}

console.log(fullName());
console.log(firstName);
console.log(lastName);
