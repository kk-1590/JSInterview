// let arr = [2, 3, 4, 5];

// const fn = (i, index, arr) => {
//   console.log(i, index, arr);
//   return i * 2;
// };

// const filterFn = (i, index, arr) => {
//   console.log(i, index, arr);
//   return i % 4 === 0;
// };

// const newArr = arr
//   .map(fn)
//   .filter(filterFn)
//   .reduce((prev, curr, i, arr) => {
//     console.log(prev,curr,i,arr);
//     return prev + curr;
//   }, 0);
// console.log(newArr);

//Polyfill for map()

// Array.prototype.myMap = function(cb) {
//     let items = [];

//     for(let i = 0; i < this.length; i++){
//         items.push(cb(this[i]));
//     }

//     return items;
// }

//Polyfill for filter
// Array.prototype.myFilter = function(cb) {
//     let items = [];

//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i])){
//             items.push(this[i]);
//         }
//     }
//     return items;
// }

//Polyfill for reduce

//arr.reduce((acc,curr,i,arr) => {},initialValue);

// Array.prototype.myReduce = function(cb,initialValue) {
//     var accumulator = initialValue;

//     for(let i = 0; i < this.length; i++){
//         accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
//     }

//     return accumulator;
// }

// let arr = [2,3,4,5];

// console.log(arr.myMap((i) => i * 2).myFilter((i) => i % 4 === 0).myReduce((acc,curr,i,arr) => acc + curr));


//map vs forEach
// const arr = [2,5,3,4,7];

// const mapResult = arr.map((ar) => {
//     return ar + 3;
// });

// console.log(arr);

// const forEachResult = arr.forEach((ar,i) => {
//     arr[i] = ar + 3;
// });

// console.log(arr);

// console.log(mapResult,forEachResult,arr);

let students = [
    {name : "AbC",rollNo: 20, marks : 80},
    {name : "DEf",rollNo: 29, marks : 40},
    {name : "xyz",rollNo: 23, marks : 70},
    {name : "Kartik",rollNo: 23, marks : 70},
]

// const newArr = students.map((item) => {
//     return item.name.toUpperCase();
// })

// console.log(newArr);

const newArr = students.filter((item) => item.marks > 60).filter((item) => item.rollNo > 20).map((item) => item.name);
console.log(newArr);

const sum = students.reduce((acc,curr) => acc + curr.marks,0);
console.log(sum);

const finalSum = students.map((item) => { if(item.marks < 60) {item.marks += 20} return item}).filter((item) => item.marks > 60).reduce((acc,curr) => acc + curr.marks,0);
console.log(finalSum);




