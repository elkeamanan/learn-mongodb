db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'age'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be a string and required'
                },
                age: {
                    bsonType: 'int',
                    description: 'must be a int and required'
                },
                activeBooksIds: {
                    bsonType: 'array',
                    items: {
                      bsonType: 'objectId'
                    },
                    description: 'must be an array of ObjectIds if present'
                },
                addresses: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'object',
                        required: ['addressName','postalCode'],
                        properties: {
                            addressName: {
                                bsonType: 'string',
                                description: 'addressName must be a string and present'
                            },
                            postalCode: {
                                bsonType: 'int',
                                description: 'postalCode must be a int and present'
                            }
                        }
                    },
                    description: 'must be an array of ObjectIds if present'
                }

            }
        }
    }
})