function functionOne(x){
    console.log(x);
}

function functionTwo(message,callback){
    callback(message);
}

functionTwo("Hello, everyone !",functionOne);