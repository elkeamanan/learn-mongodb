// one to many relations
db.authors.insertMany([
    {
        "_id": "author_id_1",
        "name": "Ahmad Rizzky",
        "age": 35,
    },
    {
        "_id": "author_id_2",
        "name": "Broko Juckro",
        "age": 40,
    }]
)

db.books.insertMany([
    {
        "_id": "book_id_1",
        "name": "Tuesday with who",
        "publishDate": 2012,
        "authorId": "author_id_1"
    },
    {
        "_id": "book_id_2",
        "name": "Laut Bercengkrama",
        "publishDate": 2013, 
        "authorId": "author_id_1"
    },
    {
        "_id": "book_id_3",
        "name": "Universal Habits",
        "publishDate": 2070, 
        "authorId": "author_id_2"
    }]
)

// aggregate books to its author
db.books.aggregate([{$lookup:{from:"authors", localField:"authorId", foreignField:"_id", as:"author"}}])

// add many to many relations (user has many activeBooks)
db.users.insertMany([
    {
        "_id": "user_id_1",
        "name": "Joko Wiic",
        "activeBooks": [
            "book_id_3"
        ]
    },
    {
        "_id": "user_id_2",
        "name": "Prabskyy",
        "activeBooks": [
            "book_id_1",
            "book_id_2"
        ]
    }]
)

// TODO: review aggregation functionality other than lookup
// get all data
db.users.aggregate([
    {
      $lookup: {
        from: "books",
        localField: "activeBooks",
        foreignField: "_id",
        as: "books"
      }
    },
    {
      $unwind: {
        path: "$books",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: "authors",
        localField: "books.authorId",
        foreignField: "_id",
        as: "books.author"
      }
    },
    {
      $unwind: {
        path: "$books.author",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        books: {
          $push: {
            _id: "$books._id",
            title: "$books.title",
            author: "$books.author"
          }
        }
      }
    }
  ])
  