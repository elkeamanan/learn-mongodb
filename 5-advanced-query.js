// we could use mongoimport for this
db.moviesData.insertMany([
  {
    title: "The Last Student Returns",
    meta: { rating: 9.5, aired: 2018, runtime: 100 },
    visitors: 1300000,
    expectedVisitors: 1550000,
    genre: ["thriller", "drama", "action"],
  },
  {
    title: "Supercharged Teaching",
    meta: { rating: 9.3, aired: 2016, runtime: 60 },
    visitors: 370000,
    expectedVisitors: 1000000,
    genre: ["thriller", "action"],
  },
  {
    title: "Teach me if you can",
    meta: { rating: 8.5, aired: 2014, runtime: 90 },
    visitors: 590378,
    expectedVisitors: 500000,
    genre: ["action", "thriller"],
  },
]);

// movies that has rating more than 9.2 and runtime less than 100
db.moviesData.find({
  $and: [{ "meta.rating": { $gt: 9.2 } }, { "meta.runtime": { $lt: 100 } }],
});

// movies that has genre drama or action
db.moviesData.find({ $or: [{ genre: "drama" }, { genre: "action" }] });

// movies that its visitors is more than expected
db.moviesData.find({ $expr: { $gt: ["$visitors", "$expectedVisitors"] } });

db.exMoviesData.insertMany([
  {
    title: "The Last Student Returns",
    meta: { rating: 9.5, aired: 2018, runtime: 100 },
    visitors: 1300000,
    expectedVisitors: 1550000,
    genre: ["thriller", "drama", "action"],
    ratings: [10, 9],
  },
  {
    title: "Supercharged Teaching",
    meta: { rating: 9.3, aired: 2016, runtime: 60 },
    visitors: 370000,
    expectedVisitors: 1000000,
    genre: ["thriller", "action"],
    ratings: [10, 9, 9],
  },
  {
    title: "Teach me if you can",
    meta: { rating: 8, aired: 2014, runtime: 90 },
    visitors: 590378,
    expectedVisitors: 500000,
    genre: ["action", "thriller"],
    ratings: [8, 8],
  },
]);

// exMovies that has exactly 2 genres
db.exMoviesData.find({ genre: { $size: 2 } });

// exMovies that aired in 2018
db.exMoviesData.find({ "meta.aired": 2018 });

// exMovies that has ratings
db.exMoviesData.find({ ratings: { $elemMatch: { $gt: 8, $lt: 10 } } });

// projection (1 means show, 0 or not set means hide)
db.exMoviesData.find({}, { title: 1, genre: 1, visitors: 1 });

// projection -- intentionally hide id
db.exMoviesData.find({}, { title: 1, "meta.rating": 1, visitors: 1, _id: 0 });
