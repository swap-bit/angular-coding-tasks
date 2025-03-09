const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();

// Configure CORS options
const corsOptions = {
    origin: "*", // Allow requests only from this domain
    methods: "GET,POST", // Allow specific HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allow specific headers
  };
  
  // Use CORS with custom options
app.use(cors(corsOptions));

app.get("/api/image", (req, res) => {
  const imagePath = path.join(__dirname, "images", "laptop.jpg"); // Path to your image file
    console.log(imagePath);
  // Check if the file exists
  if (fs.existsSync(imagePath)) {
    const mimeType = path.extname(imagePath) === ".png" ? "image/png" : "image/jpeg";
    // Set the appropriate content-type header
    res.setHeader("Content-Type", mimeType);

    // Read the file as a binary stream and send it
    const imageStream = fs.createReadStream(imagePath);
    imageStream.pipe(res);
  } else {
    res.status(404).json({ error: "Image not found" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
