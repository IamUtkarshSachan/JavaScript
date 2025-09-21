const accountId= 14456
let acEmail= " utkarsh@gmail.com"
var acPass = "4567"
acCity= "jaipur"

// accountId= 1234 // not allowed

acEmail= " harsh@gmail.com"
acPass = "689"
acCity= "Delhi"

let acState;

console.log(accountId);


/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,acEmail,acPass,acCity]);


