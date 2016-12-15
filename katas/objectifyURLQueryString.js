// In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.
//
// You will receive a string input that looks something like this:
//
// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:
//
// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
//
// function convertQueryToMap(query) {
//   // add your code here
// }
//
// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue

function convertQueryToMap(query) {
  let json = {};
  query = query.split('&');
  for (let i = 0; i < query.length; i++) {
    let item = query[i].split('=');
    console.log(item);
    let keys = item[0].split('.');
    let temp = json;
    for (let j = 0; j < keys.length; j++) {
      if (j == keys.length - 1)
        temp[keys[j]] = typeof item[1] == "string" ? decodeURIComponent(item[1]) : item[1];
      else {
        if (!(keys[j] in temp))
          temp[keys[j]] = {};
        temp = temp[keys[j]];
      }
    }
  }
  return json;
}

console.log(convertQueryToMap("user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"));

// Best practices
// 
// function convertQueryToMap(query) {
//   var obj = {};
//   query.split('&').map(function(params) {
//     var parts = params.split('=');
//     if (!parts[1]) return {};
//     parts[0].split('.').reduce(function(cur, next, i, arr) {
//       if (!cur[next]) cur[next] = {};
//       if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
//       return cur[next];
//     }, obj);
//   });
//   return obj;
// }
