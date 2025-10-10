// node 01_basics/03_conversionOperation.js
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Utkarsh"

let booleanIsLoggedIn = boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true;
// "" => false
// "Utkarsh" => true 