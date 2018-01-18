const { SHA256 } = require("crypto-js");
const jwt = require('jsonwebtoken');

var data = {
    name: `Vipul`
};
var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);