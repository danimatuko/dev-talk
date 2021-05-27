const express = require("express");
const app = express();
const { connectToDB } = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));

connectToDB();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/profile", profileRoutes);
app.use("/posts", postRoutes);
