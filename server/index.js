const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDB = require("./config/db");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// db connection
connectToDB();

// Routes

app.use("/posts", require("./routes/posts"));
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
