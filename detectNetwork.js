// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// input: cardNumber - string;
// output: card network name - string
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.


  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //Pseudocode:
  // create a network array with card objects: name, length, and prefix
  var network = [{
    name: "American Express",
    prefix: ["34", "37"],
    lengths: [15]
  },{
    name: "Diner's Club",
    prefix: ["38", "39"],
    lengths: [14]
  },{
    name: "Visa",      
    prefix: ["4"],   
    lengths: [13, 16, 19]
  },{
    name: "MasterCard",
    prefix: ["51", "52", "53", "54", "55"],
    lengths: [16]
  },{
    name: "Discover",
    prefix: ["6011", "644", "645", "646", "647", "648", "649", "65"],
    lengths: [16, 19]
  },{
    name: "Maestro",
    prefix: ["5018", "5020", "5038", "6304"],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  }];

  //iterate through the array of objects 
  for (var i = 0; i < network.length; i++) {
   // iterate through the prefixes
   for (var j = 0; j < network[i].prefix.length; j++) {
     // iterate through the lengths
     for (var k = 0; k < network[i].lengths.length; k++) {
     var pre = network[i].prefix[j];
     var lengths = network[i].lengths[k];
     var nwrk = network[i].name;
     // check to see if the first two digits are a match and if the lengths are a match
     if (cardNumber.slice(0, 2) === pre && cardNumber.length === lengths) { 
       return nwrk;
     }
     // if the first digit is '4' and the length matches then it is Visa
     if (cardNumber[0] === pre && cardNumber.length === lengths) {
       return nwrk;
     }
     // if the first four digits match and the lengths match then it is Maestro
     if (cardNumber.slice(0, 4) === pre && cardNumber.length === lengths) {
       return nwrk;
     }
     // if the first three digits and the lengths match then it is Discover
     if (cardNumber.slice(0, 3) === pre && cardNumber.length === lengths) {
       return nwrk;
     }
   }
 }
}
};
