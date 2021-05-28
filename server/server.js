const express = require("express");
const app = express();
const { connectToDB } = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));

connectToDB();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/users", userRoutes);

app.use("/profile", profileRoutes);

app.use("/posts", postRoutes);
