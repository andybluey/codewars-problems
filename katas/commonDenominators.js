// function convertFrac(lst){
//   var fraction = [];
//   var result = "";
//
//   for ( var i = 0; i < lst.length; i++) {
//     for (var j = 0; j < lst[i].length; j++) {
//       fraction.push(lst[i][j]);
//     }
//   }
//   var altered = fraction.sort(function (a, b) {  return a - b;  });
//   var newDenom = altered[altered.length-1] * altered[altered.length-2];
//
//   for ( var i = 0; i < lst.length; i++) {
//     for (var j = 0; j < lst[i].length; j++) {
//       if ( j % 2 !== 0 ) {
//         var multiplier = newDenom / lst[i][j];
//         var numerator = (lst[i][j-1])*(multiplier);
//         var denominator = (lst[i][j]*multiplier);
//         result+= "(" + numerator + "," + denominator + ")";
//       }
//     }
//   }
//   return result;
// }

// var lst = [ [1, 2], [1, 3], [1, 4] ];
// console.log(convertFrac(lst));
//
// function convertFrac(lst){
//     var array = [];
//     var str = "";
//     for(var i=0;i<lst.length;i++){
//         array.push(lst[i][1]);
//     }
//     var result = scm(array);
//     for(var i=0;i<lst.length;i++){
//         str += "(" + result / lst[i][1] * lst[i][0] + "," + result + ")";
//     }
//     return str;
// }
//
// function scm(array){
//     var max = Math.max.apply(null,array);
//     console.log(max);
//     signal:
//     while(true){
//         for(var i=0;i<array.length;i++){
//             if(max % array[i]){
//                 max++;
//                 continue signal;
//             }
//         }
//         return max;
//     }
// }

// Best Practice
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  console.log(cd);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}

var lst = [ [1, 2], [1, 3], [1, 4] ];
console.log(convertFrac(lst));
