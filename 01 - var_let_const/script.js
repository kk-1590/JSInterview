//var,let and const

//Scope

// {
//     var a = 5;
// }

// console.log(a);

// function test() {
//     let a = "Hello";

//     if(true){
//         let a = "Hi";
//         console.log(a);
//     }

//     console.log(a);
// }

// test();

// function test(){
//     let a = "Hi";
//     var b = "Goodbye";

//     if(true){
//         let b = "Hi";
//         // var a = "Goodbye";   //error --> we can't shadow let variable with var variable
//         console.log(a);
//         console.log(b);
//     }
// }

// test();

//Declaration

//Error
// let a;
// let a;

//Ok

// let a;
// {
//     let a;
// }

//Declaration without initialisation

// var a;
// let b;
//const c;  //error -> const should be initialised at the time of declaration

//Re-initialisation

// var a = 5;
// a = 5;

//Error
// const b = 5;
// b = 6;

//Hoisting

// console.log(count);  //o/p: undefined

// var count = 1;


