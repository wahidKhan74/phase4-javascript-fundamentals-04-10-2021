
// default params 
function printUser(name="Dave",age=20, gender="male") {
    console.log("Hi User , "+name+" your age "+age+" and gender "+gender);
}
printUser();
printUser("John Smith",29,"male");



// rest parameters  // varaible numbers arguments are accept rest params
function showData(...data){
    console.log(data);
}

showData("John Smith");
showData("John Smith",29);
showData("John Smith",29,"male");
showData("John Smith",29,"male",["Dave","Mike"]);


/// addition 
function add(...numbers){
    var result = 0;
    for(let num of numbers){
        result += num;
    }
    return result;
}

console.log(add(100,200));
console.log(add(100,200,300));
