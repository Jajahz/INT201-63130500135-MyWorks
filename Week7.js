//array destructuring assignment + rest parameter
[subject, students, ...listOfStudents] = ['int201',50,'a','b','c']
console.log(subject);
console.log(students);
console.log(listOfStudents);

// object destructuring assignment
({productId, productName, ...rest} = {
    productId: 111, 
    productName: 'Coke',
    c:30, 
    d:40
});
console.log(productId);
console.log(productName);
console.log(rest);

let letters = [...'hello world'];
let value = '';
for(let [index,letter] of letters.entries()){
    if(index%2 === 0) value += letter;
}
console.log(`value: ${value}`);
console.log(`letters: ${letters}`);

let arr = [1,2,3,4,5]
let beforeAdd = arr.map(p=>p*1.07)
console.log(beforeAdd);
console.log(arr)

arr.forEach(e => console.log(e))

for(let a of arr){
    console.log(a)
}


// function declaration
// const myFunc = function sum(numbers){
//     let total = 0; // local variable
//     for (let num of numbers) total+=num;
//     return total;
// }

// //calling function, function execution
// console.log(myFunc([1,2,5,10]));

//function expression + destructuring assignment
const myFunc = function (num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  };
//calling function, function execution with spread operator
myFunc(...[10, 20, 5]);


//1.
let getCourse = () => 'INT201 client side programming I';
//2.
let echo = text => text;
//3.
let isKMUTTStudent = student => student.id.length == 13;
//4.
let sum = (num1,num2,num3) => num1+num2+num3
//5.
let greetingSomeOne = name => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}

console.log(greetingSomeOne('Jajah'));



let arr = [400,131,14,27].map(e => e*2).filter(e => e<300);
console.log(arr)

let str = 'Hello World !';
let arr = str.split('').filter(e=>e!=' ').map(e=>e.toLowerCase()).join('');

console.log(arr);

let str = "12345HelloWorld134"; // return [1,2,3,4,1,3,4];

let str = "12345HelloWorld134";
let num = str.split('').filter(e=>e=!isNaN(e)).join('');

console.log(num);

"The greatest victory is that which requires no battle" --> 
"battle no requires which that is victory greatest The"

let str = "The greatest victory is that which requires no battle";

let reve = str.split(' ').reverse().join(' ');

console.log(reve);


let fullName = "Sam Harris";
let abbrevName = fullName.toUpperCase().split(' ').map(e => e[0]).join('.')

console.log(abbrevName);