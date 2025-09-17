import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Re-create __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(join(__dirname, "../front-end")));

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../front-end/index.html"));
});

// Example backend route
app.get("/test", (req, res) => {
  res.send("Backend server is working ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});