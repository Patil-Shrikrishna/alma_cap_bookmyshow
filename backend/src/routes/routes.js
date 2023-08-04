const express = require("express");

// Create a new router instance using the 'express.Router()' method.
const router = express.Router();

// Import the 'getBookings' function to handle POST requests for booking a movie.
const postBooking = require("../controllers/postBooking");
const getLastBooking = require("../controllers/getLastBooking");

// Define a route for handling POST requests to book a movie.
// When a POST request is made to '/booking', it will be handled by the 'postBooking' function from the 'bookingController'.
router.post("/booking", postBooking);
// When a GET request is made to '/booking', it will be handled by the 'getLastBooking' function from the 'bookingController'.
router.get("/booking", getLastBooking);

module.exports = router;