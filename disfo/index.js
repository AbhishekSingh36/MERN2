require("dotenv").config();
const cors = require('cors')
const express = require("express");
const userRoutes = require("./routes/user.routes");
const discussionRoutes = require("./routes/discussion.routes");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes")
const DB_URI = "mongodb://127.0.0.1:27017";

const app = express();
const PORT = 8082;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((error) => console.log("Failed to connect to DB\n", error));

app.use(cors())
app.use(express.json());
app.use("/user", userRoutes);
app.use("/discussion", discussionRoutes);
app.use("/auth", authRoutes)

app.listen(PORT, () => {
  console.log("Server Listening at", PORT);
});
