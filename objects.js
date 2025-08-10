// When the object create with literals then singleton will not create.
// When the object created with constructor than singleton will created.


// Objetc literals
const mySym = Symbol("key1")

const JSuser = {
    name : "Sumit",
    mySym : "myKey1",
    age : 20,
    location : "Delhi",
    email : "sumit789@gmail.com",
    isloggedin: false,
    LastLogginDays : ["Monday","Wednesday","Friday","Sunday"]
}

console.log(JSuser.LastLogginDays);
console.log(JSuser["name"]);

// Change Any keys of Objest
JSuser.email = "sumit@google.com";
console.log(JSuser.email);

// Freeze The Keys Of object
Object.freeze(JSuser)
JSuser.email = "sumit@chatgpt.com";
console.log(JSuser);

// Function in Object
JSuser.greeting = function(){
    console.log(`Hey I'm Sumit, ${this.LastLogginDays}`);
}
console.log(JSuser.greeting());
