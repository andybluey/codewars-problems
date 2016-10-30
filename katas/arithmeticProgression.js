// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
//
// You have to write the function findMissing (list) , list will always be atleast 3 numbers. The missing term will never be the first or last one.
//
// Example :
//
// findMissing ([1,3,5,9,11]) == 7
// PS: This is a sample question of the facebook engeneer challange on interviewstreet. I found it quite fun to solve on paper using math , derive the algo that way. Have fun!

// Find smallest gap between 2nd-1st and last-secondlast.
// var smallestGap = function () {
//   firstGap = 0;
//   secondGap = 0;

var findMissing = function (list) {

var gap = 0;
  firstGap = list[1]-list[0];
  lastNum = list.length
  lastGap = list[lastNum-1]-list[lastNum-2];

  if (lastGap === firstGap) {
    gap = firstGap;
  } else if (lastGap > firstGap) {
    gap = firstGap;
  } else {
    gap = lastGap;
  }


};
findMissing ([1,3,5,9,11]);
