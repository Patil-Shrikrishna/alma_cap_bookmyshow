// Import required modules for the application.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes");
const connectToMongo = require("./config/connector");
require("dotenv").config()

// const { createProxyMiddleware } = require("http-proxy-middleware");

// Create an instance of the Express application.
const app = express();


// Connect to MongoDB using the 'connectToMongo' function.
connectToMongo();

// Middleware for parsing JSON data in the request body.
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
app.use(cors());

// Middleware for parsing URL-encoded data (extended: false means the parser uses the classic encoding)
app.use(bodyParser.urlencoded({ extended: false }));

// Set up the routes using the imported router.
// All routes defined in the 'router' will be accessible under the '/api' path.
app.use("/api", router);

// Define the port for the server to listen on.
const port = process.env.PORT;

// Start the server and make it listen on the specified port.
// A message will be printed to the console once the server is up and running.
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
