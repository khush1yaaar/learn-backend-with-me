//----------------------TO INSERT ONE OBJECT---------------------------
db.inventory.insertOne({
    item: 'canvas',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }
});

//----------------------TO INSERT MULTIPLE OBJECTS-----------------------------
db.inventory.insertMany(
    [{item: 'canvas1',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }},

    {item: 'canvas2',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }},

    {item: 'canvas3',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }},
    
    {item: 'canvas4',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }},]
);
