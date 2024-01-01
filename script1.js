
// function counterWrapper(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }

// const updateCount = counterWrapper();

// updateCount();
// updateCount();

// function CartCounter(){
//     let _count = 0;

//     function _updateCount(val){
//         _count += val;
//     }

//     return {
//         increment (){
//             _updateCount(1);
//         },
//         decrement(){
//             _updateCount(-1);
//         },
//         value(){
//             return _count;
//         }
//     }
// }

// const cartCounter = CartCounter();

// cartCounter.increment();
// cartCounter.increment();

// console.log(cartCounter.value());


//useState hook is also based on closure

// function useState(initialValue){
//     let _state = initialValue;

//     function setState(value){
//         _state = value;
//     }


//     function getState(){
//         return _state;
//     }

//     return [getState,setState];
// }

// function Counter(){
//     const [count,setCount] = useState(0);

//     return {
//         click(){
//             setCount(count() + 1);
//         },
//         render(){
//             console.log('value : ',count());
//         }
//     }
// }

// const counter = Counter();

// counter.click();
// counter.render();
// counter.click();
// counter.render();

function createBase(value){
    let _initialValue = value;

    return function(num){
        console.log(_initialValue + num);
    }
}

console.log( createBase(9)._initialValue);
createBase(6)(21);

function fun1(num1){
    return function(num2){
        return num1 * num2;
    }
}

console.log(fun1(3)(6));