db = db.getSiblingDB("test");

db.createUser({
  user: "dev_user",
  pwd: "dev_p@ssw0rd",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
});
