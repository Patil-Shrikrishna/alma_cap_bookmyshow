require("../styles/App.css");
require("../styles/bootstrap.min.css");
const postBookingApi = require("../api/postBookingApi");
const React = require("react");

const { movies, slots, seats } = require("../components/data.js");
const LastBooking = require("../components/LastBooking.jsx");
const getLastBookingApi = require("../api/getLastBookingApi");

const BookTicket = () => {
  const [booking, setBooking] = React.useState({
    movie: "",
    slot: "",
    seats: {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0,
    },
  });
  const [lastBooking, setLastBooking] = React.useState({
    movie: "",
    slot: "",
    seats: {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0,
    },
  });

  const [isActive, setIsActive] = React.useState("");

  const movieNames = movies.map((movie) => (
    <li
      key={movie}
      className={`movie-column ${
        booking.movie === movie && "movie-column-selected"
      }`}
      onClick={() =>
        setBooking({
          ...booking,
          movie,
        })
      }>
      <b>{movie}</b>
    </li>
  ));

  const movieSlots = slots.map((slot) => (
    <li
      key={slot}
      className={`slot-column ${
        booking.slot === slot && "slot-column-selected"
      }`}
      onClick={() => setBooking({ ...booking, slot })}>
      <b>{slot}</b>
    </li>
  ));

  const movieSeats = seats.map((seat, i) => (
    <li
      key={seat}
      className={`seat-column ${isActive === seat && "seat-column-selected"}`}
      onClick={() => setIsActive(seat)}>
      <h5>Type {seat}</h5>
      <input
        type="number"
        min={0}
        name={seat}
        placeholder={0}
        onChange={(e) =>
          setBooking({
            ...booking,
            seats: {
              ...booking.seats,
              [seat]: parseInt(e.currentTarget.value) || 0,
            },
          })
        }
      />
    </li>
  ));

  const handleOnSubmit = async () => {
    postBookingApi(booking);
    const res = await getLastBookingApi();
    console.log(res);
    setLastBooking(res);
  };

  return (
    <section>
      <h1>Book that show!!</h1>
      <div className="booking-container">
        {/* booking form  */}

        <div>
          <div className="movie-row">
            <h3>Select a Movie</h3>
            <ul>{movieNames}</ul>
          </div>
          <div className="slot-row">
            <h3>Select a Time slot</h3>
            <ul>{movieSlots}</ul>
          </div>

          <div className="seat-row">
            <h3>Select a Time slot</h3>
            <ul>{movieSeats}</ul>
          </div>

          <div className="book-button">
            <button
              onClick={handleOnSubmit}
              disabled={!booking.movie || !booking}>
              Submit
            </button>
          </div>
        </div>
        {/* booking data  */}

        <LastBooking lastBooking={lastBooking} />
      </div>
    </section>
  );
};
module.exports = BookTicket;
