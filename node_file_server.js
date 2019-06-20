/*
The Built-in URL Module
The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:
*/

/*
Parse an address with the url.parse() method,
and it will return a URL object with each part of the address as properties:
*/

var url = require('url');
var adr = 'http://localhost:8000/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);

	//Split a web address into readable parts:

/*
output:

localhost:8000
/default.htm
?year=2017&month=february
february

*/