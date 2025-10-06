let num1 = 2
let num2 = num1

num2++
// console.log(num1);
// console.log(num2);

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);
// console.log(typeof id);
// console.log(typeof anotherId);

const heros = ["batman", "superman", "shaktimaan", 1, true]
// console.log(heros);

let myObj = {
    name: "Ankan",
    age: "22"
}

// console.log(myObj);
// console.log(typeof myObj);

const myFunction = function() {
    console.log("Hello");
}

myFunction();

console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof NaN);
console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++

let a=5;
let b=a; // copy of original value
b=6;
console.log(a);
console.log(b);


let userOne = {
    email:"user@gmail.com",
    upi:"user@sbi"
};

let userTwo = userOne; // reference of original value
userTwo.email = "ankanbhowmick@gmail.com";

console.log(userOne);
console.log(userTwo);
