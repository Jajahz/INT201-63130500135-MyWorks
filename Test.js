// console.log(x) //hoisting only var
x = 50;
var x = 10;
var x = 20;

let y = 5;
y = 10;

const z = 50;
// console.log(x)

function hello(){
    let y = 20;
    console.log(y);
    const z = 100;
    console.log(z)
}

// hello();

var $Name = 'jajah'
// console.log($Name)

// num = null;
// let num2;
// console.log(num)
// console.log(num2)

// var switch = 'hi'; // keyword

// num = 50
// if (num < 10){
//     console.log(num)
// }else{
//     console.log(num-10)
// }

// switch(n=30){
//     case 1:
//         console.log(1)
//     break;
//     case 2:
//         console.log(2)
//     break;
//     case 30:
//         console.log(3)
//     break;
//     default:
//         console.log('wrong')
//     break;
// }

// let count=0;
// while(count<10){
//     console.log(count);
//     count++;
// }

let a=[];
let b=a;
b[0]=1;
let c=[1];
console.log(`a===b is${a===b}`);
console.log(`b==c is${b==c}`);
console.log(b)
console.log(c)

// a = b = [1]
// c = [1]