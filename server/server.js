const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const db = require("./database/db");

app.use(express.json());

app.use(cors());

app.use("/auth", authRoutes);

app.use("/users", userRoutes);

app.use("/profile", profileRoutes);

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));
