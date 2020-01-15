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

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //Pseudocode:
  //create a length variable
  var len = cardNumber.length;
  // if the first digits are 3, then
  if (cardNumber[0] === '3') {
  	//if the second digits are equal to 8 or 9 and the lengths are 14
  	if (cardNumber[1] === '8' || cardNumber[1] === '9' && len === 14) {
  		//return diner's club
  		return 'Diner\'s Club';
  	}
    //if the second digits are equal to 4 or 7 and the lengths are 15
    if (cardNumber[1] === '4' || cardNumber[1] === '7' && len === 15) {
    	//return amex 
    	return 'American Express';
    }
  }
};

detectNetwork('343456789012345');



