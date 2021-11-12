//Group7
const group7 = document.querySelector('#Section3 .group7'); // call querySelector method to match css id section3 class group7
const name = group7.getAttribute("class"); // call getAttribure method to get key attribute class (name "group7") -> attribute name
group7.textContent = `${name} We're not a great programmer; We're just a good programmer with great habits.`
// call textContent method to show attribute name + string
