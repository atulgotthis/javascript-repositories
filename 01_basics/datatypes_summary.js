// Primitive data types // call by value --> A copy of value is provided

// 7 types:- string, number, null, undefined, boolean, bigint, symbol

// Non-Primitive data type // call by refrence

// Arrays, Object, Functions

const myString = "Atul Pathak"
const myNumber = 9891001676
const tempOutside = null
const placeHolder = undefined
const isLoggedIn = false
const myBigInt = 37405970923486n
const mySymbolVar = Symbol("123")

// console.log(myString);
// console.log(myNumber);
// console.log(tempOutside);
// console.log(placeHolder);
// console.log(isLoggedIn);
// console.log(myBigInt);
// console.log(mySymbolVar);

// Type of all data types
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof tempOutside);
console.log(typeof placeHolder);
console.log(typeof isLoggedIn);
console.log(typeof BigInt);
console.log(typeof mySymbolVar);


const heros = ["Iron-man", "Spider-ma", "Thor"]

let myObj = {
    name: "Sam",
    age: 25
}

const myFun = function(){
    console.log("hello world");
    
}

console.log(typeof myFun); // return type of function is function object





