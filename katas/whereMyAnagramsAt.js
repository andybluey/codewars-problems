// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//
// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Push each letter of first word to array.
// Count number of letters in this array. If count === count of first sample, iterate through and push to empty array if there is a match.
//
// function anagrams(word, words) {
//   var wordLength = word.length,
//       wordsLength = words.length,
//       wordLetters = {},
//       match = [];
//
//   wordLetters = compareString(word);
//
//   for (var i = 0; i < wordsLength; i++) {
//     var newWord = words[i];
//         newWordsLetters = compareString(newWord);
//     if(compareLetterCount(wordLetters, newWordsLetters))
//       match.push(newWord);
//   }
//   // console.log("first match", match);
//   return match;
// }
//
// function compareString (string) {
//   var stringLength = string.length,
//       letters = {};
//
//   for (var i = 0; i < stringLength; i++) {
//     if (typeof letters[string[i]] === 'undefined') {
//       letters[string[i]] = 1;
//     } else {
//       console.log(letters[string[i]]);
//       letters[string[i]]++;
//     }
//   }
//   console.log("compareString",letters);
//   return letters;
// }
//
// function compareLetterCount (a, b) {
//
//   if(Object.keys(a).length !== Object.keys(b).length)
//     return false;
//
//   for (var letter in a) {
//     if (a[letter] !== b[letter])
//       return false;
//     if (typeof b[letter] === 'undefined')
//     // empty
//       return false;
//   }
//   return true;
// }


// Best practice!!!
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
console.log(anagrams('abba', ['abbba']));
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));
