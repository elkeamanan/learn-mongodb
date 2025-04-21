// Insert multiple patientData collections into patients database

db.patientData.insertMany([
    {
        "firstName": "Ujang",
        "lastName": "Midlane",
        "age": 45,
        "history": [
            {
                "dicease": "cold",
                "treatment": "icu"
            },
            {
                "dicease": "cough",
                "treatment": "icu"
            }
        ]
    },
    {
        "firstName": "Frujang",
        "lastName": "Goldlane",
        "age": 28,
        "history": [
            {
                "dicease": "sober",
                "treatment": "fanta"
            },
            {
                "dicease": "cough",
                "treatment": "icu"
            }
        ]
    },
    {
        "firstName": "Bento",
        "lastName": "Box",
        "age": 48,
        "history": [
            {
                "dicease": "summer",
                "treatment": "fanta"
            },
            {
                "dicease": "fantasy",
                "treatment": "fanta"
            }
        ]
    }
])

// Update some value and try to append array of nested object
db.patientData.updateOne({"firstName": "Frujang"}, {$set: {"firstName": "Brujang", "age": 20, "lastName":"Momento"}, $push: {"history": {"dicease":"party", "treatment": "coffeeshop"}}})

// Filtering by "age"
db.patientData.find({"age": {$gt: 30}})

// Delete where age is less than 30
db.patientData.deleteOne({"age": {$lt: 30}})