const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files using an absolute path
console.log('Serving front-end from:', path.join(__dirname, "../frontend"));
app.use(express.static(path.join(__dirname, "../frontend")));
// note: makes front end files treat frontend as root, so need to adjust css stylesheet links

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}/`));