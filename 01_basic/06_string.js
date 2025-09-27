const name = "Prince"
const repCount = 10

//console.log(name + repCount) // concatinate older 

console.log(`Hello my name is ${name} and my repo count is ${repCount}`);

// also we can declare the string like this
const gameName = new String('PrinceYaadaav')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // check index 2 which character is present
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,7)
console.log(newString);

// const anotherString = gameName.slice(-12,1)
// console.log(anotherString);

const newString1 = "  prince  "
console.log(newString1.trim());

const url = "https://prince.com/prince%20yadav"

console.log(url.replace('%20','-'));