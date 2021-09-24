//#1
let num1=10;
let num2=20;

num2=num1; // num1 assigns value (10) to num2

num2=55;

console.log(num1); //10
console.log(num2); //55

//#2
let std1 = {id:1, name:'Susan'};
let std2 = {id:2, name:'John'};

std2=std1; // std1 assigns value (memory address) points to the same memory address

std2.name='Peter';

console.log(std1) //id 1 peter
console.log(std2) //id 1 peter

console.log(num1===num2) // false ? primitive value are compared
console.log(std1===std2) // true ? memory address are compared


//#3
function doSomething1(student){ // student is a formal parameter [student=std3]
    student.id=63130500135;
}

let std3 = {id:1, name:'Joe'};
doSomething1(std3); // std3 is an actual parameter
console.log(std3) // 63130500135

//#4
function doSomething2(num){ // [num = num3] 
    num = 555;
}

let num3 = 1;
doSomething2(num3);
console.log(num3); //1