// Import schema model for database operations.
const bookingModel = require("../model/schema");

const getLastBooking = async (req, res) =>{
    // Query to find last movie ticket booking
    bookingModel.findOne({}).sort({ bookedAt: -1 })
    .then((lastEntry) => {
        if (lastEntry) {
            // If found send status code 200 and last entry in response
            res.status(200).json(lastEntry)
        } else {
            // If not found send status code 404 and error message in response
            res.status(404).json('No previous booking found.' )
        }
      })
      .catch((err) => {
        // For internal server error send 500 status code and error message
        res.status(500).json({
            message: "An unexpected error occurred. Please try again later.",
          });
      });

}
// Export route controller
module.exports = getLastBooking