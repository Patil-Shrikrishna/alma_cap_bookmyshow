Documentation:

    Introduction:

    - Web App Name:         BookMyShow
    - Purpose:              BookMyShow is a web application that allows users to make movie bookings
                            and retrieve their last booking details.
    - Technologies Used:
                            - Backend: Node.js with Express.js framework
                            - Database: MongoDB
                            - Frontend: React.js with JSX for form rendering
    API Endpoints:

    POST /api/booking
        Endpoint for posting movie booking details.
        Request Body:
            json
                {
                    "movie": "Tenet",
                    "slot": "03:00 PM",
                    "seats": {
                        "A1": 0,
                        "A2": 0,
                        "A3": 4,
                        "A4": 0,
                        "D1": 0,
                        "D2": 0
                    }
                }
        Response:
            json
                {
                    "movie": "Tenet",
                    "slot": "03:00 PM",
                    "seats": {
                        "A1": 0,
                        "A2": 0,
                        "A3": 4,
                        "A4": 0,
                        "D1": 0,
                        "D2": 0
                    },
                        "_id": "64d0af4709a4852908bede8d",
                        "bookedAt": "2023-08-07T08:45:59.544Z", "__v": 0
                }

    GET /api/booking
        Endpoint for fetching the last booking details.
        Response:
            json
                {
                    "movie": "Tenet",
                    "slot": "03:00 PM",
                    "seats": {
                        "A1": 0,
                        "A2": 0,
                        "A3": 4,
                        "A4": 0,
                        "D1": 0,
                        "D2": 0
                    },
                        "_id": "64d0af4709a4852908bede8d",
                        "bookedAt": "2023-08-07T08:45:59.544Z", "__v": 0
                }
    Database Schema:

        Collection Name: bookings
            Schema:
            json
                {
                    movie: { type: String },
                    slot: { type: String },
                    seats: {
                    A1: { type: Number },
                    A2: { type: Number },
                    A3: { type: Number },
                    A4: { type: Number },
                    D1: { type: Number },
                    D2: { type: Number },
                    },
                        bookedAt: { type: Date, default: Date.now, index: true }
                }

    User Interface (UI):
        The web app has a simple user interface with a form to collect booking details.

    Workflow:
        User fills the movie booking form with details.
        The form data is sent to the POST API endpoint.
        The backend server processes the data and saves it in the database.
        User can later retrieve the last booking by calling the GET API endpoint.

    Testing:
        API's are tested using postman for API testing.

    Challenges:
        Integrating the frontend and backend smoothly.
        Handling database connections and errors.

---

Presentation:

    Introduction:

        Hello everyone, I am shrikrishna patil, and today I am excited to present my web app called BookMyShow!

    Problem Statement:
        Going to a movie without a pre-booking can be a hassle, especially during peak times. My web app aims to provide users with a simple and efficient way to book their movie tickets in advance.

    Solution:
        BookMyShow is a user-friendly web application that allows users to make movie bookings with ease. Let me demonstrate how it works.

    Technologies Used:
        Backend: NodeJS with ExpressJS
        Database: MongoDB
        Frontend: ReactJS

    Demo:
        I will now demonstrate how to make a movie booking using BookMyShow.

    User Interface (UI):
        This is how the user interface looks with the booking form.

    Workflow:
        Walkthrough the user flow of booking and retrieving the last booking.

    Challenges and Solutions:
        Discuss the challenges faced during development and how they were overcome.

    Conclusion:
        BookMyShow simplifies the movie booking process, making it convenient for users to secure their seats in advance. With future enhancements, the app aims to offer even more exciting features to enhance the movie-going experience.
        Feel free to customize the data and add more details specific to your project. Good luck with your presentation!
