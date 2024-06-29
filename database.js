const { createSuperAdmin } = require("./Controller/superAdmin.controllers")
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const db = mongoose.connect("mongodb+srv://jetalsavani55:qwertyuiop@cluster0.mxnyt4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", async (error, Db) => {
    if (error) {
        console.log("Database not connected", error);

    } else {
        console.log("Database Connceted");
        await createSuperAdmin()
    }
});

module.exports = db;