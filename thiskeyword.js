// //situation 1 --> window object
// console.log(this);

// //situation 2 --> window object
// function log(){
//     console.log(this);
// }

// log();

//situation 3 --> object

// const user = {
//     fname : 'Kartik',
//     lname : 'Kh',
//     printFullName : function(){
//         console.log(this);
//     }
// }

// user.printFullName();

// //situation 4 --> User

// function User(fname,lname){
//     console.log(this);
// }

// const coders = new User('coders','gyan')

//situation 5 --> window

// const user = {
//     fname : 'Kartik',
//     lname : 'Kh',
//     printFullName : function(){
//         console.log(this);
//     }
// }

// const printFullName = user.printFullName;
// printFullName();