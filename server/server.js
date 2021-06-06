const express = require("express");
const app = express();
const { connectToDB } = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.use("/auth", authRoutes);

app.use("/users", userRoutes);

app.use("/profile", profileRoutes);

app.use("/posts", postRoutes);

// if (process.env.NODE_ENV === "production") {
// 	// Serve any static files
// 	app.use(express.static(path.join(__dirname, "client/build")));
// 	// Handle React routing, return all requests to React app
// 	app.get("*", function (req, res) {
// 		res.sendFile(path.join(__dirname, "client/build", "index.html"));
// 	});
// }

const PORT = process.env.PORT || 5000;

connectToDB();

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));
