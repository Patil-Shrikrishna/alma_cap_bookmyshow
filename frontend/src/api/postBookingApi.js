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

    if (!response.ok) {
      throw new Error(
        `Error creating booking: ${response.status} ${response.statusText}`
      );
    }

    // Successful POST request
    return "Booking created successfully!";
  } catch (error) {
    throw error;
  }
};

module.exports = postBookingApi;
