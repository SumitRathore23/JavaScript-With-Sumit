console.log("S");
console.log("U");
console.log("M");
console.log("I");
console.log("T");

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}

sayMyName()

// Add Two Numbers

function addTwoNumbers(number1,number2){
    result= number1+number2
    console.log(result)
    return result
}
addTwoNumbers(2,3) //5
addTwoNumbers(2,"a") // 2a
addTwoNumbers(2,"4")// 24
addTwoNumbers(2,null)// 2

function loginUserName(username = "Shivam"){
    if(!username){
        console.log("Please enter a Valid Username");
        return
    }
    return `${username} Just Logged In`
}
console.log(loginUserName());//Shivam Just Logged In
console.log(loginUserName("Sumit Rathore"));//Sumit Rathore Just Logged In

// Use In Projects like E-Commerse

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500));//[ 400, 500 ]

// Any Object Use In function

const user = {
    userName : "Sumit",
    Price : 1987
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and Price is ${anyobject.Price}`);
}

handleObject(user);// Username is Sumit and Price is 1987
handleObject({
    userName:"Sam",
    Price: 789
}) //Username is Sam and Price is 789


const myNewArray = [200,300,400,500]
function returnScondValue(getArray){
    return getArray[1]
}
console.log(returnScondValue(myNewArray));//300
console.log(returnScondValue([200,300,400,500]));//300
