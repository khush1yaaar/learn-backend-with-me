//-------------------------- TO FETCH DATA FROM COLLECTION ----------------------
db.inventory.find();

//-------------------------- TO FETCH SPECIFIC DATA FROM COLLECTION -----------------------
db.inventory.find({qty: 90});

//-------------------------- TO FETCH DATA FROM COLLECTION WHOSE TAGS PROPERTY IS EITHER COTTON OR D ---------------------
db.inventory.find({tags: { $in: ["cotton" , "d"]}}) // IN OPERATOR

db.inventory.find({status: "A", qty: {$lt: 30}}) // AND OPERATOR

db.inventory.find( { $or: [{status: "A"}, {qty: {$lt: 30}}]}) // OR OPERATOR