// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){

  var domain = url.replace(/www\./,'');
  var domain = domain.match(/([a-zA-Z0-9\-]{2,256})?(?=[\.])/ig);
  console.log( domain[0] );
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");

// Best solution:

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
console.log(domainName("http://github.com/carbonfive/raygun"));
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");
