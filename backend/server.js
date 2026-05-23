const express = require("express");
const path = require("path");

const app = express();

// API
app.use("/api/service", require("./routes/service"));

// frontend serve
app.use(express.static(path.join(__dirname, "../public")));

// default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// PORT (IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
