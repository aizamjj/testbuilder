/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16' , function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16' , function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a lenfth of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var expect = chai.expect;
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011875617465735')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011756384756182846')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441756384756182')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441756384756182678')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451756384756182')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451756384756182789')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461756384756182')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461756384756182789')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471756384756182')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471756384756182789')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481756384756182')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481756384756182789')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491756384756182')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491756384756182789')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6517563847561826')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6541756384756182789')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501874658372')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502074658372')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503874658372')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630474658372')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018847362839')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020847362839')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038847362839')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304847362839')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50188473628390')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50208473628390')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50388473628390')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63048473628390')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501884736283901')).to.equal('Maestro');
  });
   it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502084736283901')).to.equal('Maestro');
  });
    it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503884736283901')).to.equal('Maestro');
  });
    it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630484736283901')).to.equal('Maestro');
  });
    it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018847362839012')).to.equal('Maestro');
  });
    it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020847362839012')).to.equal('Maestro');
  });
    it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038847362839012')).to.equal('Maestro');
  });
    it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304847362839012')).to.equal('Maestro');
  });
    it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50188473628390123')).to.equal('Maestro');
  });
    it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50208473628390123')).to.equal('Maestro');
  });
    it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50388473628390123')).to.equal('Maestro');
  });
    it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63048473628390123')).to.equal('Maestro');
  });
    it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501884736283901234')).to.equal('Maestro');
  });
    it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502084736283901234')).to.equal('Maestro');
  });
    it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503884736283901234')).to.equal('Maestro');
  });
    it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630484736283901234')).to.equal('Maestro');
  });
    it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018847362839012345')).to.equal('Maestro');
  });
    it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020847362839012345')).to.equal('Maestro');
  });
    it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038847362839012345')).to.equal('Maestro');
  });
    it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304847362839012345')).to.equal('Maestro');
  });
});

describe('China UnionPay', function() {
  var expect = chai.expect;
  for (var len = 16; len <= 19; len++) {
    for (var prefix = 622126; prefix <= 622925; prefix++) {
      var rest = '0';
      var card = prefix.toString() + rest.repeat(len - prefix.toString().length);
      (function(card) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(card)).to.equal('China UnionPay')
        });
      })(card) 
    }
  }
  for (var len = 16; len <= 19; len++) {
    for (var prefix = 624; prefix <= 626; prefix++) {
      var rest = '0';
      var card = prefix.toString() + rest.repeat(len - prefix.toString().length);
      (function(card) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(card)).to.equal('China UnionPay')
        });
      })(card) 
    }
  }
  for (var len = 16; len <= 19; len++) {
    for (var prefix = 6282; prefix <= 6288; prefix++) {
      var rest = '0';
      var card = prefix.toString() + rest.repeat(len - prefix.toString().length);
      (function(card) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(card)).to.equal('China UnionPay')
        });
      })(card) 
    }
  }
});

describe('Switch', function() {
  var expect = chai.expect;
  var switchPre = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"];
  for (var len = 16; len < 17; len++) {
    for(var i = 0; i < switchPre.length; i++) {
      var prefix = switchPre[i]; //prefix 4903
      var rest = '0';
      var card = prefix + rest.repeat(len - prefix.length); //length = 16, prefix = 4; 
      (function(card) { //'4903000000000000'
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(card)).to.equal('Switch')
        });
      })(card)
    }
  }

  for (var len = 18; len <= 19; len++) {
    for(var i = 0; i < switchPre.length; i++) {
      var prefix = switchPre[i]; //prefix 4903
      var rest = '0';
      var card = prefix + rest.repeat(len - prefix.length); //length = 16, prefix = 4; 
      (function(card) { //'4903000000000000'
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          expect(detectNetwork(card)).to.equal('Switch')
        });
      })(card)
    }
  }
});


