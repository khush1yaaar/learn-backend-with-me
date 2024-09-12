// --------------------------------------- EXAMPLES ON THIS DATA ------------------------------------------
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
]);

// Find and sort documents by quantity in descending order
db.inventory.find().sort({ qty: -1 });
// This sorts the documents by `qty` in descending order (highest first)

// Find and sort documents by quantity in ascending order
db.inventory.find().sort({ qty: 1 });
// This sorts the documents by `qty` in ascending order (lowest first)

// Skip the first document and retrieve the rest
db.inventory.find().skip(1);
// Skips the first document and returns the remaining documents

// Skip the first two documents and retrieve the rest
db.inventory.find().skip(2);

// Limit the result to only one document
db.inventory.find().limit(1);
// Returns only the first document

// Limit the result to two documents
db.inventory.find().limit(2);
// Returns only the first two documents
