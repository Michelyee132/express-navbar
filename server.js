// server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Root route - serves the navbar page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/Michelyee132/climate-crisis");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/Michelyee132/TypeSettings");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/Michelyee132/four-sorting-algorithms");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
