// insert database with unordered insert and add to journals with timeout
db.hobbies.insertMany([
    {
        "_id": "sports",
        "name": "Sports"
    },
    {
        "_id": "yoga",
        "name": "Yoga"
    },
    {
        "_id": "hiking",
        "name": "Hiking"
    }
], {ordered: false, writeConcern: {w:1, j:true, wTimeout:2000}})