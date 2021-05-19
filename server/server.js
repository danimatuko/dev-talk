const express = require("express");
const app = express();
const { connectToDb } = require("./db");
const postRoutes = require("./routes/postRoutes");

app.listen(5000, () => console.log("server listening on port 5000..."));

connectToDb();

app.use(express.json());

app.use("/posts", postRoutes);