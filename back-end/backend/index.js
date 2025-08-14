const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files using an absolute path
console.log('Serving front-end from:', path.join(__dirname, "../front-end"));
app.use(express.static(path.join(__dirname, "../front-end")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/index.html"));
});
app.get("/test", (req, res) => {
  res.send("Backend server is working");
});