

const names= require("./04-names")
 
const sayHello = require("./05-utils"); 

const alternative = require("./06-alternative-flavor");

require("./07-mind-grenade");

sayHello(names.john)

sayHello(names.mary)

console.log("Items List:", alternative.itemList);
console.log("Person Info:", alternative.person);
