// only insert if '_id' does not already exist
db.user.updateOne(
    {
        _id: 1
    },
    {
        $setOnInsert: {name: "Ada Lovelace", age: 205}
    },
    {
        upsert: true
    }
)