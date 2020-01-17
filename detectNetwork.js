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
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.


  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //Pseudocode:
  // create a network array with card objects: name, length, and prefix
  var network = [{
    name: "Diner's Club",
    prefix: ["38", "39"],
    lengths: [14]
  },{
    name: "American Express",
    prefix: ["34", "37"],
    lengths: [15]
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
  },{
    name: "China UnionPay",
    prefix: [true],
    lengths: [16, 17, 18, 19]
  },{
    name: "Switch",
    prefix: ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"],
    lengths: [16, 18, 19]
  }];
  //create variable for card length
  var len = cardNumber.length;
  //create variables for firstone/two/three/four/six digits;
  var first = cardNumber[0];
  var firstTwo = cardNumber.slice(0, 2);
  var firstThree = cardNumber.slice(0, 3);
  var firstFour = cardNumber.slice(0, 4);
  var firstSix = cardNumber.slice(0, 6);
  //iterate through the array of objects 
  for (var i = 0; i < network.length; i++) {
   // iterate through the prefixes
   for (var j = 0; j < network[i].prefix.length; j++) {
     // iterate through the lengths
     for (var k = 0; k < network[i].lengths.length; k++) {
     var pre = network[i].prefix[j];
     var lengths = network[i].lengths[k];
     var nwrk = network[i].name;
     // for visa conflict, first check for Switch, if the first four and six are a match along with length
     if (firstFour === pre && len === lengths) {
       return nwrk;
     }
     else if (firstSix === pre && len === lengths) {
      return nwrk;
     }
     //otherwise if the first digit is 4 and lengths match then it is Visa 
     else if (first === pre && len === lengths) {
       return nwrk;
     }
     //first two prefixes for MasterCard and lengths
     else if (firstTwo === pre && len === lengths) { 
       return nwrk;
     }   
     // if the first four digits match and the lengths match then it is Maestro
     else if (firstFour === pre && len === lengths) {
       return nwrk;
     }
     // if the first three digits and the lengths match then it is Discover
     else if (firstThree === pre && len === lengths) {
       return nwrk;
     }
     //if the prefix is true and the lengths match, return china UnionPay
     else if (isChinaUnionPayPrefix(cardNumber) === pre && len === lengths) {
      return nwrk;
     }
   }
 }
  }
  return 'Not in Network'
};
//create a function to check if the prefix of cardNumber matches the ChinaUnionPay
function isChinaUnionPayPrefix(cardNumber) {
  //prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  //if the first four digits equal 6282, 6283
  var firstFour = cardNumber.slice(0, 4);
  var firstThree = cardNumber.slice(0, 3);
  if (firstThree === '622') {
    //if the next three match  126 - 925 then return true (convert to number)
    var nextThree = Number(cardNumber.slice(3, 6));
    console.log(nextThree)
    if (nextThree >= 126 && nextThree <= 925) {
      return true;
    }
  } else if (firstFour === '6282' || firstFour === '6283' || firstFour === '6284' || firstFour === '6285' || firstFour === '6286' || firstFour === '6287' || firstFour === '6288') {
    return true;
  } //if the first three digits are are qual to 624, 625 and 626 return true
  else if (firstThree === '624' || firstThree === '625' || firstThree === '626') {
    return true;
  }
  return false;
  //otherwise if the first three equal '622'
}
