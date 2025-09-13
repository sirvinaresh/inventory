const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/bookstore")
      .then(() => console.log("MongoDB connected"));
  } catch (error) {
    console.log("MonogoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
