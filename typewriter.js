console.log('hello');

let str = 'Hello world';

let arr = [1,2,1,3,4,1,2,4,5];

let obj = arr.reduce((prev,curr) => {
    if(prev[curr]){
        prev[curr] = prev[curr] + 1;
    }
    else{
        prev[curr] = 1;
    }
    return prev;
},{});

console.log(obj);

var ele = document.getElementById('message')

type(str);


function type(str){
    if(str.length === 0){
        clearTimeout(timeout);
    }
    else{
        var timeout = setTimeout(() => {
            ele.innerHTML += str.substr(0,1);
            type(str.substr(1,str.length));
        },1000);        
    }
}

