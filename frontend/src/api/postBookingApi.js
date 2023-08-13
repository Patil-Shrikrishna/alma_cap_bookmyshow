// Define the 'postBookingApi' function
const postBookingApi = async (data) => {
  try {
    // Send a POST request to the "/api/booking" endpoint
    const response = await fetch("https://alma-cap-bookmyshow-backend-6yxn.onrender.com/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type for the request
      },
      body: JSON.stringify(data), // Convert the data object to JSON and set it as the request body
    });

    // Return the parsed json data from the api
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

module.exports = postBookingApi;
