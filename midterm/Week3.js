//nested object

let music = {name: 'Lover Boy' , genre: {one: 'Pop', two: 'Soul'}}

console.log(music)

//array in object
let student = {nickname: ['A','B','C'], age: [20,19,18]}

console.log(student)

// function in object
let triangle = {base: 50, height: 20, area: function(){return this.base*(this.height*1/2)}}

console.log(triangle)
console.log(triangle.area())