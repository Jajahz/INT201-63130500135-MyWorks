/* const MAX_STUDENT = 50;
// MAX_STUDENT = 100;
let maxStudent = 50;

const player1 = { id: 1, name: 'Adam' };
// player1 = player2; //memory address, cannot re-assign value
player2 = player1; //player1 address assigns to player2

//setter-mutator methods/mutated (modified property) syntax
//player1.id = 5; or
//player1["id"]=5;

//getter-accessor method/read property
//player.id or
//player["id"]

player1.id=5;
player1.name= 'Mary';

console.log(player1)
console.log(player2) */

/*let product1 = 'Coke';
let product2 = 'Pepsi';
let price1 = 15;
let price2 = 13;

let product1 = ['Coke', 'Pepsi']
let price1 = [15, 13]
// array แยก

let products = [
    {product: 'Coke', price: 15},
    {product: 'Pepsi', price: 13}
]
// array have object inside da best

// {propKey : propValue, propKey: propValue}

let product2 = {
    products: ['Coke', 'pepsi'],
    prices: [15, 13]
}
// object have array inside*/

class Dice{
    

    constructor(gameTitle){
        
        console.log('constructor is working')
        this._diceName = gameTitle;
        this._faceValue = 0;

        if(gameTitle === undefined){
            this._diceName = 'Unknown';
        }else{
            this._diceName = gameTitle;
        }


    }

    roll(){
        this._faceValue = Math.floor(Math.random()*6)+1;
        return this._faceValue;
    }

    get faceValue(){
        console.log('getter is working')
        return this._faceValue;
    }

    set faceValue(faceValue){
        console.log('getter is working')
        this._faceValue = faceValue;
    }

    get diceName(){
        return this._diceName;
    }

    set diceName(diceName){
        this._diceName = diceName;
    }

    toString(){
        return `game = ${this._diceName} faceValue = ${this._faceValue}`
    }
}

let dice1 = new Dice('hilo');

// console.log(dice1)
// console.log(dice1.roll())
// console.log(dice1.faceValue)
// console.log(dice1["faceValue"])
// dice1["faceValue"]=5;
// console.log(dice1.faceValue)
console.log(dice1.toString())

let dice2 = new Dice();

// console.log(dice2)
// console.log(dice2.roll)

Dice.prototype.toString = function(){
    return `game = ${this._diceName} faceValue = ${this._faceValue}`
}

console.log(dice2.toString())