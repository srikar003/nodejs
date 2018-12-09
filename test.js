var request = require("request");
console.log("111111");
var options = { method: 'POST',
url: 'http://pa508idmwwwu1/EpmPolarisAdaptor/oauth/token',
headers:
{ 'Postman-Token': 'ecc54ac3-8d85-4e71-8c63-1eba760a6c7c',
'Cache-Control': 'no-cache',
'Content-Type': 'application/x-www-form-urlencoded' },
form:
{ username: 'epmPolarisApp_dev',
password: 'polaris@123',
grant_type: 'password' } };
console.log("options ..", options )
request(options, function (error, response, body) {
console.log("111112222222")
if (error) throw new Error(error);
 
console.log(body);
});