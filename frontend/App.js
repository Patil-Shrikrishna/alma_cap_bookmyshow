const React = require ("react");
const BookTicket = require("./src/components/BookTicket.jsx");

require ("./src/styles/App.css");
require ('./src/styles/bootstrap.min.css')


const App = () => {
  
  return (
    <div className="d-flex">
      <BookTicket/>
      
    </div>
  )
}
module.exports = App;