let player1={};
let player2={};
let playerResult={player1,player2}
let gameRound;

function randomDice() {
    return Math.floor((Math.random() * 6)+1);
}

function setUpPlayer(name1,name2) {
    player1={name:name1,disceResult:[],gameResult:[]};
    player2={name:name2,disceResult:[],gameResult:[]};
    
    playerResult={player1,player2}
    return playerResult;

}

function setRound(round){
    gameRound=round;
    return gameRound;
}

function startGame(){
    for(let i = 0;i<gameRound;i++){
        player1.disceResult.push(randomDice());
        player2.disceResult.push(randomDice());
    }
    for(let i = 0;i<gameRound;i++){
        if(player1.disceResult[i]<player2.disceResult[i]){
            player1.gameResult.push("LOOSE");
            player2.gameResult.push("WIN");
        }else if(player1.disceResult[i]>player2.disceResult[i]){
            player1.gameResult.push("WIN");
            player2.gameResult.push("LOOSE");
        }else{
            player1.gameResult.push("DRAW");
            player2.gameResult.push("DRAW");
        }
    }
}

setUpPlayer('name1','name2')
setRound(5)
console.log(startGame())
console.log(playerResult)