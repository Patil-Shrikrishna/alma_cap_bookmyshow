const React = require("react");
require("../styles/App.css");
require('../styles/bootstrap.min.css')
const {lastBooking} = require('./data')


const LastBooking = () => {
    const[data,setData] = React.useState({});


  
    React.useEffect( ()=>
   {
    
    
    // correct this code
    lastBooking.map(last => {
      setData({movie,slot,seat})
    })
    // correct this code
  
  
    }, [])


  
   console.log("data?.seat", data?.seat);
    const seats = data?.seat  
      for(val of seats){
        <p>{val}</p> 
      }
    return(
      <div className="last-order h-100 mt-4">
         <div>
            
                <span className="text-lg font-bold">
                  Last Booking Details :
                  
                </span>
                <p className="font-bold">seats:
                  {/* {renderSeatCount} */}
                  {seats}
                </p>
               
                <p>
                  <span className="font-bold">slot :{data.slot} </span>
                 {console.log(data)}
                
                </p>
                <p>
                  <span className="font-bold"> movie :{data.movie} </span>
                  
                </p>
              </div>
      </div>
    )
}
module.exports = LastBooking;