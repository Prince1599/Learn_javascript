const accountId = 12545
let accountEmail = "prince@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 12586  // not allowed
accountEmail = "yadav@gmail.com"
accountPassword = "2345"
accountCity = "Gorakhpur"
let accountState;


console.log("accountId");

/* Preder not to use var
because of issue in black scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
