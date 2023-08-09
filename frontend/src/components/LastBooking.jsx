const React=require('react')

// Define the 'LastBooking' functional component
const LastBooking = ({ lastBooking }) => {
  return (
    <div className="ticket-container">
      <h2>Last Booking Details:</h2>

{!lastBooking?.movie ? <p>No last Booking found</p> : 
  <>{/* Display the list of booked seats */}
      <div>
        <b>seats:</b>
        <ul>
          { lastBooking?.seats!== undefined  && Object.entries(lastBooking?.seats).map(([seat, count]) => (
            <li key={seat}>
              <b>{seat}: </b>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </div>

{/* Display the booked time slot */}
      <div>
        <b>slot:</b> <span>{lastBooking?.slot}</span>
      </div>

{/* Display the booked movie */}
      <div>
        <b>movie:</b> <span>{lastBooking?.movie}</span>
      </div></>}
    </div>
  );
};

module.exports = LastBooking;
