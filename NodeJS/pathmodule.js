const path = require("path");

const a1 = path.basename('/foo/bar/baz/asdf/quux.html');
const a2 = path.dirname('/foo/bar/baz/asdf/quux.html');
const a3 = path.extname('/foo/bar/baz/asdf/quux.html');

console.log(a1);
console.log(a2);
console.log(a3);

