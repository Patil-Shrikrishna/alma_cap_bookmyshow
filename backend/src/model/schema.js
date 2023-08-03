const mongoose = require("mongoose");

const bookMovieSchema = new mongoose.Schema({
  movie: { type: String },
  slot: { type: String },
  seats: {
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number },
  },
});

const bookingModel = mongoose.model("bookmovietickets", bookMovieSchema);

module.exports = bookingModel;
