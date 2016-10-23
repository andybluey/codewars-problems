// describe('Initial Tests',_=>{
//   Test.assertEquals(tripledouble(451999277,41177722899),1);
//   Test.assertEquals(tripledouble(1222345, 12345),0);
//   Test.assertEquals(tripledouble(12345, 12345),0);
//   Test.assertEquals(tripledouble(666789, 12345667),1);
//   Test.assertEquals(tripledouble(10560002, 100),1);
// });

  // Iterate through first number to see if a number is repeated three times - if it is, push the number to an array.

// Check the second set of numbers to see whether this number features more than once.


function tripledouble(num1, num2) {

  num1 = num1.toString().split('');
  num2 = num2.toString().split('');
  var triples = [];
  var triple = '';
  var doubles = [];
  var double = '';

  for (var i = 0; i < num1.length; i++) {
    if (num1[i] === num1[i+1] && num1[i+1] === num1[i+2]) {
      triple = num1[i] + num1[i+1] + num1[i+2];
      triples.push(triple);
    }
  }

  for (var i = 0; i < num2.length; i++) {
    if (num2[i] === num2[i+1]) {
      double = num2[i] + num2[i+1];
      doubles.push(double);
    }
  }

  doubles = doubles.join('').split('');
  triples = triples.join('').split('');

  for (var i = 0; i < triples.length; i++) {
    if (doubles.indexOf(triples[i]) > -1) {
      return 1;
    }
  }
  return 0;
}
tripledouble(86495577775666, 3282938166);

// Best solution
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}
