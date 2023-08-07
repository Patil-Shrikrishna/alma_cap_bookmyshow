const React = require("react");

const LastBooking = ({ lastBooking }) => {
  return (
    <div className="ticket-container">
      <h2>Last Booking Details:</h2>

      {/* seats  */}

      <div>
        <b>seats:</b>
        <ul>
          {Object.entries(lastBooking?.seats).map(([seat, count]) => (
            <li key={seat}>
              <b>{seat}: </b>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* slot  */}
      <div>
        <b>slot:</b> <span>{lastBooking?.slot}</span>
      </div>

      {/* movie  */}
      <div>
        <b>movie:</b> <span>{lastBooking?.movie}</span>
      </div>
    </div>
  );
};

module.exports = LastBooking;
