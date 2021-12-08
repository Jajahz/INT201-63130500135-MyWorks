rand = (number) => {
    num = Math.floor((Math.random()*10)+1);
    if(number>num){
        return `to high : the num is ${num}`
    }if(number<num){
        return `to low : the num is ${num}`
    }else{
        return `you win! : the num is ${num}`
    }
}

console.log(rand(8));