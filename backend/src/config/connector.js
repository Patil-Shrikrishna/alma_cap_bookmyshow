const mongoose = require("mongoose");
require("dotenv").config()

// Function to establish a connection with MongoDB.
const connectToMongo = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    // Connect to MongoDB using Mongoose.
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log a success message.
    console.log("Connection established with MongoDB server online");
  } catch (error) {
    // If an error occurs during connection, handle and log the error.
    console.error("Error while connecting to MongoDB:", error);

    // Exit the process with a non-zero status code to indicate failure.
    process.exit(1);
  }
};

module.exports = connectToMongo;
