// Write a function that takes an integer and returns an Array [A, B, C] where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.
//
// For example, solution(20) should return [5, 2, 1]
//
function solution(number){
  var arr = [];
  var first = arr.push(Math.floor((number - 3) / 3));
  var second = arr.push(Math.floor((number - 5) / 5));
  var third = arr.push(Math.floor((number - 5 - 3) / 8));
  return arr;
}

console.log(solution(20));
