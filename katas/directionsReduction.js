// Task
//
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//
// The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

// Test each step of the array - for loop i vs i+1

// function dirReduc(arr){
//   var i = 0;
//   while(i < arr.length) {
//     if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
//     (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
//     (arr[i] === "EAST" && arr[i+1] === "WEST") ||
//     (arr[i] === "WEST" && arr[i+1] === "EAST")) {
//         arr.splice(i, 2);
//         i--;
//     }
//     else {
//         i++;
//     }
//   }
//   return arr;
// }
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
