const React = require("react");
require("../styles/App.css");
require('../styles/bootstrap.min.css')

const { movies, slots, seats } = require('./data.js')

const BookTicket = () => {
  

    return (
       
     <div className="container bg-white ">
            <h3 className="pt-4 m-4 mr-8">Book that show</h3>
                <div className="movie-row m-4">
                    <p className="h5">Select a movie</p>

                    {movies.map(movie =>
                        <div className="movie-column p-2 h6">
                            {movie}
                        </div>
                    )}

                </div>
                <div className="slot-row m-4">
                   <p className="h5"> Select a time slot</p>
                    {slots.map(slot =>
                        <div className="slot-column p-2 h6">
                            {slot}
                        </div>
                    )}
                </div>
                <div className="seat-row m-4">
                   <p className="h5">Select the seat</p>
                    {seats.map(seat =>
                        <div className="seat-column p-2 h6">
                           <p className="h6"> Type {seat}</p>
                            <input type="number" placeholder="0" name="quantity" min="1" max="5"/>
                        </div>
                    )}
                </div>
                
                  <div className="book-button m-4">
                    <button>
                        Book Now
                    </button>
                  </div>
            </div>
       
    )
}
module.exports = BookTicket;