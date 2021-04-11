let userMap  =  new Map();

// use set method to add key value in js map.
userMap.set("id",1000002);   // key is string string value is number
userMap.set(1,"John");        // key is number value is string 
userMap.set("lastName","Smith"); // key value are string
userMap.set(true,"Married");      // key is boolean value string;

// console.log(userMap);
// fetch data from js Map
console.log("Key 1 : ",userMap.get(1));
console.log("Key id : ",userMap.get("id"));

console.log("Keys : ",userMap.keys());

/// iteration over map

for(let key of userMap.keys()) {
    console.log("Key  : "+key +" ,  value "+userMap.get(key));
}


