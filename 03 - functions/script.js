//Functions in Javascript

//1. function declaration

//function expressions

// const square = function(num) {
//     return num * num;
// }

//anonymous function --> function without name

//first class functions --> functions treated like variable

// function square(num){
//     return num * num;
// }

// function displaySquare(fn){
//     console.log("Square is : " + fn(5));
// }

// displaySquare(square);

//IIFE --> immediately invoked functions

// (function(num){
//     console.log(num * num);
// })(6);


// function scope

//Q. O/P based question

// for(var i = 0; i < 5; i++){  //o/p: 5 5 5 5 5
// //   console.log(i);
//   setTimeout(function(){
//       console.log(i);
//   }, i* 1000);
// }

// for (let i = 0; i < 5; i++) {   //o/p: 0 1 2 3 4
//   //   console.log(i);
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

//Hoisting of functions and variables

//function hoisting
// sayHello(); ---> "hello world"

// function sayHello(){
//     console.log("hello world");
// }

//variable hoisting

// console.log(x); --> undefined
// var x = 5;

// var x = 21;

// var fun = function(){
//     console.log(x);
//     var x = 20;
// }

// fun()

//o/p: undefined

//spread vs rest
// function square(...nums){  //params
//     // console.log(num1 * num2);
//     console.log(nums);
//     console.log(nums[0] * nums[1]);
// }

// var arr = [5,6];
// square(...arr); //arguments

// error A rest parameter must be last in a parameter list
// const fn = (a, ...numbers,x,y) => {
//     console.log(x,y);
// }

// fn(5,6,3,7);

//Callback
//examples --> event listeners,map,filter,reduce,setTimout,setInterval

//arrow function

//arrow function vs normal functions

// 1.Syntax

//2. Implicit return keyword

//return keyword removed because we returning a single value
const square = (num) => num * num;

//3. arguments

function fn(){
    console.log(arguments);
}


const fnArrow = () => {
    console.log(arguments);
}

// fn(1,2,3); --> [1,2,3]

// fnArrow(1,4,5); --> error we can't have arguments in an arrow function

// 4. this keyword

let user = {
    username : 'Kartik',
    rc1: () => {
        console.log("Subscribe to " + this.username);
    },
    rc2() {
        console.log("Subscribe to " + this.username);
    }
}

// user.rc1(); --> "subscribe to undefined" because this refers to the lexical parent in arrow functions which in this case is window object and we are accessing a unknown property it will give undefined
// user.rc2(); ---> "subscribe to Kartik"



