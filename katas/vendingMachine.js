function VendingMachine(coins) {
  this.coins = coins;
  let length = coins.length;
  let keys = Object.keys(coins);
  let values = Object.values(coins);
  let sum = 0;
  for ( var i =0; i<keys.length; i++) {
    sum += values[i] * keys[i];
    console.log(sum);
  }
  return sum;
}

VendingMachine.prototype.vending = function(price, credit) {
  console.log(VendingMachine());

  return credit;
}

console.log(VendingMachine.prototype.vending(12, 3));

var vm = new VendingMachine({1:1, 2:0, 4:3, 6:2});
