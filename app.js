const express = require("express");
const app = express();

const questionRoutes = require("./routes/question");

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/question", questionRoutes);

module.exports = app;
