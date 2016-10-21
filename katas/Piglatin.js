// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

// Split string looking for whitespace
// Regex and replace https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// reverse the letters of each word
// add 'ay' onto the end of each string.
//
// function pigIt(str){
//   return str.replace(/\b(\w)(\w+)/g, function(w,f,l){return l+f+"ay";});
// }
//
// console.log(pigIt('Pig latin is cool'));

// This one looks good
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
console.log(pigIt('Pig latin is cool'));
