// One of the first chain emails I ever received was about a supposed Cambridge University study that suggests your brain can read words no matter what order the letters are in, as long as the first and last letters of each word are correct.
//
// Your task is to create a function that can take any string and randomly jumble the letters within each word while leaving the first and last letters of the word in place.
//
// For example,
//
// mixwords('Winter is coming') // returns 'Wntier is cminog' or 'Wtiner is conimg'
// mixwords('Hey, friends!') // returns 'Hey, fierdns!' or 'Hey, fernids!'
// All punctuation should remain in place
// Words smaller than 3 letters should not change
// Letters must be randomly moved (and so calling the function multiple times with the same string should return different values
// Parameters that are not strings should return undefined
// The tests do the following things to ensure a valid string is returned:
//
// Check that the string returned is not equal to the string passed (you may have to revalidate the solution if your function randomly returns the same string)
// Check that first and last letters of words remain in place
// Check that punctuation remains in place
// Checks string length remains the same
// Checks the function returns undefined for non-strings
// Checks that word interiors (the letters between the first and last) maintain the same letters, albeit in a different order
// Checks that letters are randomly assigned.

function mixwords(str) {
  if (typeof str !== "string") return undefined;

  var arr = str.split(" ");

  arr = arr.map(function(val) {
    return mixstr(val);
  });

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function mixstr(word) {
    if (word.length <= 3) return word;
    var pass = [];
    word = word.split("");

    word.forEach(function(val, i) {
      if (/[a-zA-z]+/.test(val)) {
        pass.push(i);
      }
    });
    // console.log(pass);
    pass.pop();
    pass.shift();

    pass.forEach(function(val, i) {
      var random = pass[randomNum(0, pass.length)];
      var scramble = word[val];
      word[val] = word[random];
      word[random] = scramble;
    });

    return word.join("");
  }
  return arr.join(" ");
}

console.log(mixwords("Winter is really soon coming"));

// Best solution

function scramble(word) {
  if (word.length < 4) {return word;}
  var newstr = word[0];
  var newarr = word.substring(1, word.length-1).split('');
  while (newarr.length) {
    var idn = Math.floor(Math.random() * newarr.length);
    newstr += newarr.splice(idn, 1);
  }
  newstr += word[word.length - 1];
  return newstr;
}

function mixwords(str){
  if (typeof str != 'string') {return undefined;}
  var words = str.match(/\b[a-z]+\b/gi);
  for (let i = 0; i < words.length; i++) {
    str = str.replace(words[i], scramble(words[i]));
  }
  return str;
}
