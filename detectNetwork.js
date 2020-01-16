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
  //create a first digit variable
  var first = cardNumber[0];
  //create a second digit variable
  var second = cardNumber[1];
  //if the first digit is 4 and length is 13, 16 or 19
  if (first === '4') {
  	if (len === 13 || len === 16 || len === 19) {
  		//return visa
  		return 'Visa';
  	}
  //if the first digit is 5 and the second digits are 1-5, and length is 16
  } else if (first === '5') {
  	if (len === 16 && second === '1' || second === '2' || second === '3' || second === '4' || second === '5') {
  		//return mastercard
  		return 'Mastercard';
  	}  
  // if the first digits are 3, then
  } else {
    if (first === '3') {
  	//if the second digits are equal to 8 or 9 and the lengths are 14
  	  if (len === 14 && second === '8' || second === '9') {
  		//return diner's club
  		return 'Diner\'s Club';
  	}
    //if the second digits are equal to 4 or 7 and the lengths are 15
    if (len === 15 && second === '4' || second === '7') {
    	//return amex 
    	return 'American Express';
    }
  }
  }
};

detectNetwork('343456789012345');



