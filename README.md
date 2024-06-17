Holiday Planner Backend

Overview

The Holiday Planner Backend is a RESTful API built with Node.js and Express, designed to manage the backend functionalities of the Holiday Planner application. This API handles user authentication, CRUD operations for holidays, hotels, flights, and events, and other business logic.

Features:
User Authentication: Sign up, log in, and log out with JWT-based authentication.
Holiday Management: Create, read, update, and delete holiday plans.
Hotel Management: Add, read, update, and delete hotel details for each holiday.
Flight Management: Add, read, update, and delete flight details for each holiday.
Event Management: Add, read, update, and delete event details for each holiday.

Technologies Used:

Backend: Node.js, Express
Database: MongoDB
Authentication: JWT (JSON Web Token)
Environment Variables: dotenv

Installation

Prerequisites
Node.js
npm (Node Package Manager)
MongoDB

Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/holiday-planner-backend.git
cd holiday-planner-backend
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the following environment variables:

env
Copy code
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=5000
Run the Server:

bash
Copy code
npm start

API Endpoints

User Routes

POST /api/users/signup: Sign up a new user.
POST /api/users/login: Log in an existing user.

Holiday Routes

GET /api/holidays: Get all holidays for the logged-in user.
POST /api/holidays: Create a new holiday.
PUT /api/holidays/
: Update an existing holiday.
DELETE /api/holidays/
: Delete an existing holiday.

Hotel Routes

GET /api/hotels/
: Get all hotels for a specific holiday.
POST /api/hotels: Add a new hotel to a holiday.
PUT /api/hotels/
: Update an existing hotel.
DELETE /api/hotels/
: Delete an existing hotel.

Flight Routes

GET /api/flights/
: Get all flights for a specific holiday.
POST /api/flights: Add a new flight to a holiday.
PUT /api/flights/
: Update an existing flight.
DELETE /api/flights/
: Delete an existing flight.

Event Routes

GET /api/events/
: Get all events for a specific holiday.
POST /api/events: Add a new event to a holiday.
PUT /api/events/
: Update an existing event.
DELETE /api/events/
: Delete an existing event.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Express for the web framework.
MongoDB for the database.
JWT for JSON Web Token authentication.