// Write a function that returns the sum of the passed arguments. The input arguments may be Numbers and/or String representations of numbers. The function must return a String.
//
// Example
//
// add(123, "321") === "444";
// add("1234567890.0987654321", "8765432109.9012345678") === "9999999999.9999999999";
// add("1.2.3", 1.23); === NaN;
// add(0.1, 0.0001) === "0.1001";
// Notes
//
// The input numbers may be very very big and/or very very small. Addition must be exact - no floating point errors. The numbers are all positive and base 10. Some arguments may not be numbers. In these cases, return NaN. Remove trailing zeros and decimal point if possible.

function add(x,y){
  let NaN = "NaN";
  if (isNaN(x) || isNaN(y) !== 'true') {
    return NaN;
  } else {
  let num1 = parseInt(x);
  console.log(num1);
  // Check to see if
  let num2 = parseInt(y);
  let sum = num1 + num2;
  return sum.toString();
  }
}
console.log(add("222.222", "222.222"));
