// When the object create with literals then singleton will not create.
// When the object created with constructor than singleton will created.


// Objetc literals
/* const mySym = Symbol("key1")

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
*/


// PART II


const tinderUser = {}
tinderUser.id = "1234sumit";
tinderUser.name = "Sumit Rathore";
tinderUser.isloggedin = false;

//console.log(tinderUser);// { id: '1234sumit', name: 'Sumit Rathore', isloggedin: false }

const regularUser = {
    email : "some@gpt.com",
    fullname : {
        userfullname :{
            firstName : "Sumit",
            lastName : "Rathore"
        }
    }
}
/* console.log(regularUser.email);//some@gpt.com
console.log(regularUser.fullname);//{ userfullname: { firstName: 'Sumit', lastName: 'Rathore' } }
console.log(regularUser.fullname.userfullname);//{ firstName: 'Sumit', lastName: 'Rathore' }
console.log(regularUser.fullname.userfullname.firstName);//Sumit
console.log(regularUser.fullname.userfullname.lastName);//Rathore */


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"d"}
const obj4 = {3:"c",4:"f"}

const obj5 =Object.assign(obj1,obj2,obj3,obj4)
//console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'f', '5': 'e', '6': 'd' }

// Use of Spread to Combine 

const obj6 = {...obj1,...obj2,...obj3,...obj4}
//console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'f', '5': 'e', '6': 'd' }

// To Konw about the Data Type

/* console.log(Object.keys(tinderUser));// [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderUser));// [ '1234sumit', 'Sumit Rathore', false ]
console.log(Object.entries(tinderUser)); [
  [ 'id', '1234sumit' ],
  [ 'name', 'Sumit Rathore' ],
  [ 'isloggedin', false ]
]
*/

// Object Destructuring And JSON API

const course = {
    coursename: "Java Script",
    Price : "999",
    courseListener:"Sumit Rathore"
}
// To restruct it
const {courseListener:listener} = course
//console.log(courseListener);
console.log(listener);//Sumit Rathore

//JSON API

{
    coursename: "Java Script",
    Price : "999",
    courseListener:"Sumit Rathore"  
}

[
    {},
    {},
    {}
]