// group stage
db.persons.aggregate([
    { $match: {"$dob.age": {$gt: 50}}},
    { $group: {_id:{gender: "$gender"}, avgAge : {$avg: "dob.age"}, numPersons: {$sum:1}}},
    { $sort: {numPersons: -1}}
]).pretty()

