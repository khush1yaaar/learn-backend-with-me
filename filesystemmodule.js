const fs = require("fs");

fs.readFile('file.txt', 'utf8' , (err, data) =>  { // readFile will take time to execute(find the file.txt, etc)
    console.log(err, data); // so moves on until it's output is ready 
});

console.log("finished reading file"); // that's why this executes first

fs.readFileSync('file.txt', 'utf8' , (err, data) =>  {
    console.log(err, data); // to stop from miving on use readFileSync
});

console.log("finished reading file"); // will execute after the function

fs.writeFileSync('newFile.txt', 'example of fs.writefile function'); 
