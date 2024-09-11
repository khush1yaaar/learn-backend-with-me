const os = require("os"); // does not need ./ cause it is an inbuilt module

console.log(os.freemem()); // shows avalaible memory
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
// refer to https://nodejs.org/docs/latest/api/os.html for more 