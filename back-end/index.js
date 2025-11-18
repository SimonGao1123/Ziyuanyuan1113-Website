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



// Start server (bind to 0.0.0.0 to accept external traffic inside container)
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}/`);
});