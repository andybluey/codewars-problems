function humanReadable(input) {
  var hrs = Math.floor(input/3600);
  var mins = Math.floor((input - hrs*3600)/60);
  var secs = Math.floor(input - hrs*3600 - mins*60);
  setHrs = hrs > 9 ? hrs : "0" + hrs;
  setMins = mins > 9 ? mins : "0" + mins;
  setSecs = secs > 9 ? secs : "0" + secs;
  return setHrs + ":" + setMins + ":" + setSecs;
}

console.log(humanReadable(90550));

// Best solutions
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
