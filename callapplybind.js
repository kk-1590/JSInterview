//call, apply, bind

// const user = {
//     name : 'Coders gyan',
//     printName(){
//         console.log(this.name);
//     }
// }

// user.printName();
//this kis ko refer kare --> this ki value user2 honi chahiye

// const user2 = {
//     name : 'johndoe'
// }

// const res = user.printName.bind(user2);
// res();

//Function borrowing

const user = {
    fname : 'Coders',
    lname : 'Gyan',
    getFullName(greeting,timeOfTheDay){
        return `${greeting}, ${timeOfTheDay} ${this.fname} ${this.lname}`;
    }
}

const user2 = {
    fname : 'John',
    lname : 'Doe',
}

// const getFullName = user.getFullName.bind(user2,'hi','morning');
// console.log(getFullName());
// console.log(user.getFullName.call(user2,'Hello','morning'));
// console.log(user.getFullName.apply(user2,['Hello','morning']));


//Function currying

// function multiply(a,b){
//     return a*b;
// }

// const doubleIt = multiply.bind(null,2);

// // console.log(multiply(2,4));
// console.log(doubleIt(5));

// async function fetchData(baseUrl,endpoint){
//     const response = await fetch(`${baseUrl}${endpoint}`);
//     const data = await response.json();
//     return data;
// }

// const getAuthData = fetchData.bind(null,'http://authservice.com');

// const getCatalogData = fetchData.bind(null,'http://catalogservice.com');

// console.log(getAuthData("/api/user"));

// console.log(getCatalogData("/api/catalog"));

// function print(){
//     console.log(this);
//     console.log(this.name);
// }

// const user3 = {
//     name : 'john',
// }

// print.call(user3);

// print();

//Event listeners

class User{
    name;

    constructor(name){
        this.name = name;
        this.printName = this.printName.bind(this);
    }

    printName(){
        console.log(this);
        console.log(this.name);
    }
}

const user4 = new User('Kartik')

console.log(user4);
user4.printName();

//to solve the problem of this in event listeners
//in event listeners this refers o the element to which the event listener is added

const btn = document.querySelector('#btn');

// btn.addEventListener('click',user4.printName);
btn.addEventListener('click',function(){
    user4.printName();
});

