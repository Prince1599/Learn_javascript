//JavaScript is a dynamically typed language. 
// This means that you don't need to specify the data type of a variable when you declare it.

// +++++++++++Return type of variables in JavaScript++++++++++++++++++
/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
*/

const score  = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ; // value is undefined by default

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 326521545n

/*
2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "hitesh",
    age:22,

}
const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myObj);
 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
datatypes are based on memory allocation
Stack
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory
*/
let myname = "Princeyadav"
let anothername = myname
anothername = "vineetyadav"

console.log(myname);
console.log(anothername);


/*
Heap
Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory
*/

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "prince@google.com"

console.log(userOne.email);
console.log(userTwo.email);

