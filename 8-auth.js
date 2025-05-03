// admin for users
db.createUser({ user: "aman", pwd: "iman", roles: ["userAdminAnyDatabase"] });

// admin for database db (create collection etc)
db.createUser({
  user: "ajeng",
  pwd: "sekar",
  roles: ["dbAdminAnyDatabase"],
});

// read write access on multiple db
db.createUser({
  user: "mina",
  pwd: "hasa",
  roles: [
    { role: "readWrite", db: "customers" },
    { role: "readWrite", db: "sales" },
  ],
});
