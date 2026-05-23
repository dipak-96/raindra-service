const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// frontend serve
app.use(express.static(path.join(__dirname, "../public")));

// routes
const serviceRoute = require("./routes/service");
app.use("/api", serviceRoute);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
