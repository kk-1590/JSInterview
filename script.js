// for(let i = 0; i < 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     },2000);
// }

//o/p: 0 1 2 3 4


// for(var i = 0; i < 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     },2000);
// }

//o/p: 5 5 5 5 5


//function scope and block scope

//event loop(async)

// var username = 'rekeshk';

// function login(){
//     var username = 'johndoe';
// }

// if(true){
//     var username = 'johndoe';
// }

// console.log(username);

var user = 'User1';

// function fun(){
//     var user = 'User inside function';
// }

if(true){
    var user = 'User inside block';
}

console.log(user);