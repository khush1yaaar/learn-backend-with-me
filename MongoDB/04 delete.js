// Delete a single document
db.collectionName.deleteOne({ field: value });

// Delete multiple documents
db.collectionName.deleteMany({ field: value });

// Delete all documents in a collection
db.collectionName.deleteMany({});

// Delete all users where the age is greater than 30
db.users.deleteMany({ age: { $gt: 30 } });

// Drop the entire collection
db.collectionName.drop();

// For deleting the whole database
db.dropDatabase();
