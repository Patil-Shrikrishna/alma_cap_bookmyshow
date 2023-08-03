const bookingModel = require("../model/schema");

const postBooking = async (req, res) => {
  try {
    // Create a new booking using the 'bookingModel' and the request body data.
    const booking = await bookingModel.create(req.body);

    // Check if the booking was successfully created.
    if (!booking) {
      // If no booking is found, respond with a 404 error and a message.
      return res
        .status(404)
        .json({ message: "Failed to create booking. Please try again later." });
    }

    // If the booking is successfully created, respond with a 201 status (Created) and the booking details in JSON format.
    res.status(201).json(booking);
  } catch (error) {
    // If an error occurs during the process, handle and log the error.
    console.error("Error creating booking:", error);

    // Check if the error is related to validation (e.g., invalid data format).
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid booking data. Please provide valid details.",
      });
    }

    // For other types of errors, respond with a generic error message and a 500 status (Internal Server Error).
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};

module.exports = postBooking;
