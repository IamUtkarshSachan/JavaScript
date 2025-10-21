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

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true;
// "" => false
// "Utkarsh" => true 

let value =3
let negValue = -value
console.log(negValue); 


let str1 ="hello"
let str2 = " Utkarsh"

let str3 = str1+str2

console.log(str3);
