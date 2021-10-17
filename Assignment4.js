m = (num,str) => {
    switch(num){
    case 1: reverseStr = (str) => {
    return str.split("").reverse().join("");
    }
    break;
    case 2: replaceStr = (str) => {
    return str.replace(/a|e|i|o|u/gi, '*');
    }
    break;
    case 3: countV = (str) => {
    return str.split("").filter(c=>!(c==" ")).join("").length;
    }
    break;
}
}
console.log(m(3,'Jajah'));