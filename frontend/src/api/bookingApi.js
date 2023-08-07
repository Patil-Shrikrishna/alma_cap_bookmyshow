const bookingApi = async(type,data) =>{
  try {
    const URL = process.env.REACT_APP_DATABASE_URL
    const options = {
        method: type,
        url: `/api/booking`,
        data
    }
    await fetch(options).then((res) => res).then((data) => console.log(data))
  } catch (error) {
    console.error(error);
  }
}

module.exports = bookingApi