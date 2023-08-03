const React = require ("react");
const BookTicket = require("./src/components/BookTicket.jsx");
const LastBooking = require("./src/components/LastBooking.jsx");
require ("./src/styles/App.css");
require ('./src/styles/bootstrap.min.css')


const App = () => {
  
  return (
    <div className="d-flex">
      <BookTicket/>
      <LastBooking/>
    </div>
  )
}
module.exports = App;