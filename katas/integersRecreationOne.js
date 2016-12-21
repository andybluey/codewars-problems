// Integers: -recreation-one
//
// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!
//
// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
//
// The result will be an array of arrays(in C an array of Pair), each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
//
function listSquared(m, n) {
    var num_arr= [];
    var sum_arr = [];

    for (var i = m; i <= n; i++) {
        num_arr.push(i);
        var sum = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                sum+=j*j;
            }
        }
        sum_arr.push(sum);
    }

    var ans_arr = [];
    for (var k = 0; k < sum_arr.length; k++) {
        var temp = [];
        var calc = Math.round(Math.sqrt(sum_arr[k]));
        if (calc*calc === sum_arr[k]) {
            temp.push(num_arr[k]);
            temp.push(sum_arr[k]);
            ans_arr.push(temp);
        }
    }
    return ans_arr;
}


console.log(listSquared(1, 250));


// Best solution
// function listSquared (m, n) {
//   var matches = [];
//
//   for (var i = m; i <= n; ++i) {
//     var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
//     var ok = Number.isInteger(Math.sqrt(sum));
//
//     if (ok) {
//       matches.push([i, sum]);
//     }
//   }
//
//   return matches;
// }
//
// function getDivisors (n) {
//   var divisors = [];
//
//   for (var i = 1; i <= n / 2; ++i) {
//     if (n % i) {
//       continue;
//     }
//
//     divisors.push(i);
//   }
//
//   return divisors.concat([n]);
// }
