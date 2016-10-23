// Write function toAcronym which takes a string and make an acronym of it.
//
// Rule of making acronym in this kata:
//
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:
//
// Code wars -> C, w -> C W -> CW

function toAcronym( input ){
  var matches = input.match(/\b(\w)/g);
  var acronym = matches.join('').toUpperCase();
  return acronym;
}

console.log(toAcronym("Code wars"));


// Best practice
function toAcronym( input ){
  return input.split(' ')
              .map(function(item) {
                 return item[0].toUpperCase();
              })
              .join('');
}
