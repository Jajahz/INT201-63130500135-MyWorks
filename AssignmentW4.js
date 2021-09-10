let dice = {result: [Math.floor((Math.random() * 6)+1), Math.floor((Math.random() * 6)+1)]}
let player = {name: ['Jajah','Phop'], result: [dice.result[0],dice.result[1]]}

function diceGame(){
    if(player.result[0]<player.result[1]){
        return player.name[1]+" win"
    }else if(player.result[0]>player.result[1]){
        return player.name[0]+" win"
    }else{
        return "Draw"
    }
}

let rOne = {round: 1, player, result: diceGame()}
let rTwo = Object.create(rOne)
rTwo.result = diceGame()

console.log(rOne)
console.log(rTwo)

// let rounds= {rOne, rTwo}

// console.log(rounds)