// Define the 'postBookingApi' function
const postBookingApi = async (data) => {
  try {
    // Send a POST request to the "/api/booking" endpoint
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type for the request
      },
      body: JSON.stringify(data), // Convert the data object to JSON and set it as the request body
    });

  

    // Successful POST request
    return response.json()
  } catch (error) {
    console.error(error);
    
  }
};

module.exports = postBookingApi;
