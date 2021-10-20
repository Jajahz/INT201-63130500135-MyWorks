//higher order func

function add(n1,n2){
    return n1+n2;
}

function operator(n1, n2, n3){
    return n3(n1,n2);
}

let result = operator(4, 5, add)
// console.log(result);

//closure

function getWord(words){
    function filterWord(filterdWord){
        return words.filter((e) => {
            if(e.length == filterdWord.length){
                console.log(e);
            }
        })
    }
    return filterWord;
}

let censorWord = getWord(['jajah', 'aom', 'arm']);
// console.log(censorWord('jah'));

//default param - rest param - argument param - destructuring

//default
function greeting(name = 'anonymous'){
    return `anyonghaseyo ${name}`;
}

// console.log(greeting());
// console.log(greeting('Jajah'));


//export import
export {greeting};

