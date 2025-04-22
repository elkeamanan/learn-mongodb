// upsert
db.sports.updateMany(
  {},
  { $set: { title: "Soccer", requiresTeam: true } },
  { upsert: true }
);

db.sports.updateMany(
  { title: "Golf" },
  { $set: { requiresTeam: false } },
  { upsert: true }
);

// add new field based on condition
db.sports.updateOne({ requiresTeam: true }, { $set: { minimumPlayers: 2 } });

// increment a field
db.sports.updateOne({ requiresTeam: true }, { $inc: { minimumPlayers: 10 } });

db.sports.insertMany([
  {
    title: "Swim",
    requiresTeam: false,
    locations: [
      {
        name: "Jakarta",
        total: 2,
      },
      {
        name: "Surabaya",
        total: 13,
      },
    ],
  },
  {
    title: "Running",
    requiresTeam: false,
    locations: [
      {
        name: "Jakarta",
        total: 12,
      },
      {
        name: "Surabaya",
        total: 3,
      },
    ],
  },
]);

// update matched element on array
db.sports.updateMany(
  { locations: { $elemMatch: { total: { $gt: 5 } } } },
  { $set: { "locations.$.isCrowded": true } }
);
