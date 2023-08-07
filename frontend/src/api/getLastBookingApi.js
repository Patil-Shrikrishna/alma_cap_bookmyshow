const getLastBookingApi = async(data) =>{
  const res = await fetch("/api/booking",{
    method: "GET",
    headers: {
      "content-type": "application/json"
    },
  })
  return res.json()

}
module.exports = getLastBookingApi