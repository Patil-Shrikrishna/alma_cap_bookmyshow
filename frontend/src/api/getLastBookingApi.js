// Define the 'getLastBookingApi' function
const getLastBookingApi = async () => {
  try {
    // Send a GET request to the "/api/booking" endpoint
    const res = await fetch("/api/booking", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set the content type for the request
      },
    });

    if (!res.ok) {
      throw new Error(
        `Error fetching last booking: ${res.status} ${res.statusText}`
      );
    }

    // Return the parsed JSON response from the API
    return res.json();
  } catch (error) {
    throw error;
  }
};

// Export the 'getLastBookingApi' function to make it available for use in other modules
module.exports = getLastBookingApi;