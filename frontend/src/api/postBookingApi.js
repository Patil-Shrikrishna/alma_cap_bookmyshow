const postBookingApi = async(data) =>{
  const res = await fetch("/api/booking",{
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body:JSON.stringify(data) 
  })

}
module.exports = postBookingApi