
function getMissingIngredients(recipe, added) {
  let max = 0, result = {};
  for (let ingredient in recipe) {
    if (ingredient in added)
      max = Math.max(Math.ceil(added[ingredient] / recipe[ingredient]), max);
  }
  if (max == 0)
    return recipe;
  for (let ingredient in recipe) {
    if (!(ingredient in added)) {
      result[ingredient] = max * recipe[ingredient];
    }
    else if (added[ingredient] < max * recipe[ingredient]) {
      result[ingredient] = max * recipe[ingredient] - added[ingredient];
    }
  }
  return result;
}

var recipe = {flour: 200, eggs: 1, sugar: 100};

console.log(getMissingIngredients(recipe, {flour: 50, eggs: 1}));
console.log(getMissingIngredients(recipe, {}));
console.log(getMissingIngredients(recipe, {flour: 500, sugar: 200}));

// Another good solution.
// 
// function getMissingIngredients(recipe, added) {
//
//   var numCakes = Object.keys(added).reduce((num, ingredient) =>
//     Math.max(num, Math.ceil(added[ingredient] / recipe[ingredient])), 1);
//
//   return Object.keys(recipe).reduce((list, ingredient) => {
//       var needed = numCakes * recipe[ingredient] - (added[ingredient] || 0);
//       if (needed) {
//         list[ingredient] = needed;
//       }
//       return list;
//     }, {});
//
// }
