const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDB = require("./config/db");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// db connection
connectToDB();

// Routes

app.use("/posts", require("./routes/posts"));
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
