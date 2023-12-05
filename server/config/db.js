const mongoose = require("mongoose")

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("connection Failed to Mongodb", error);
  }
}

module.exports = connectToDB;
