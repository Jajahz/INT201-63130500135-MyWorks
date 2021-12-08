// closure function

function getWord(words) {
  // เป็น function เก็บ array ตัวอักษรมาเก็บไว้เพื่อนำไป filter ตัวอักษรที่อยากให้แสดงออกมา
  function filterWord(filterdWord) {
    // เป็น function กรองตัวอักษรที่ตรงกับเงื่อนไขออกมาแสดง
    return words.filter((e) => {
      if (e.length == filterdWord.length) {
        // เงื่อนไขก็คือถ้าตัวอักษรใน array ที่เราเก็บมาตอนแรกนั้นมีความยาวเท่ากับตัวอักษรที่เราได้ใส่ค่ามา
        return e; // ก็จะ return ค่าตัวอักษรใน array ที่มีความยาวเท่ากับตัวอักษรที่เราได้เก็บมาภายหลัง
      }
    });
  }
  return filterWord; //อันนี้คือ return function filterWord หากเราได้เรียก function เดิมซ้ำสอง
}

let censorWord = getWord(["jajah", "aom", "arm", "phop"]);
console.log(censorWord("jah"));
console.log(censorWord("jajah"));
console.log(censorWord("phop"));

// higher order function, rest parameter, default parameter

let personArray = [];

function doSomethingArray(fn, num, ...rest) {
  if (rest.length !== 0) {
    return `You can only add only one value, ${rest} can not be used. TRY AGAIN!!`;
  }

  return fn(num);
}

function addToLastIndex(num = 1) {
  personArray.push(num);

  return personArray;
}

function addToFirstIndex(num = 1) {
  personArray.unshift(num);
  return personArray;
}

function removeFormLastIndex() {
  personArray.pop();
  return personArray;
}

function removeToFirstIndex() {
  personArray.shift();
  return personArray;
}

console.log(doSomethingArray(addToFirstIndex, 5, 6, 7));
console.log(doSomethingArray(addToFirstIndex, 5));
console.log(doSomethingArray(addToFirstIndex, 6));
console.log(doSomethingArray(removeFormLastIndex));
