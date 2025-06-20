const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/users");
const config = require("./config/mongoConnection.json");

// Middleware
app.use(express.json());

// DB connection
mongoose.connect(config.url).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/users", userRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
