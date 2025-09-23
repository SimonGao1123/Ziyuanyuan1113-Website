import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Re-create __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (front-end is a sibling folder to back-end)
const staticPath = join(__dirname, "..", "front-end");
app.use(express.static(staticPath));

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(join(staticPath, "index.html"));
});

// Example backend route
app.get("/test", (req, res) => {
  res.send("Backend server is working ✅");
});

// Start server (bind to 0.0.0.0 to accept external traffic inside container)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});