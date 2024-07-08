# Car Inventory Application

This is a full-stack web application called carInventory. The back-end of the application is built using Express and the front-end using React. The application uses MongoDB to store information about cars in a collection called cars.

## Features
- Add a car to the cars collection.
- Update information about a single car.
- Update information about more than one car.
- Delete a specific car.
- List all the information for all cars in the database.
- List model, make, registration number, and current owner for all cars older than 5 years.

## Installation and Running Locally
### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.

## Back-End (Express)
1. Clone the repository:
```
git clone https://github.com/your-username/carInventory.git
cd carInventory/car-inventory-backend
```

2. Install dependencies:

```
npm install
```
3. Create a .env file in the root of the car-inventory-backend directory and add your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database
```
4. Start the server:
```
node server.js
```

## Front-End (React)
1. Install dependencies:
```
npm install
```
2. Start the React application:
```
npm start
```
3. Open your browser and navigate to http://localhost:3000

## Testing with ThunderClient

### Add a Car
- Endpoint: POST http://localhost:8080/cars/add
- Request Body:
```
{
  "model": 2021,
  "make": "Toyota",
  "colour": "Red",
  "registration_number": "ABC123",
  "owner": "John Doe",
  "address": "123 Main St"
}
```
## Update a Single Car
- Endpoint: PUT http://localhost:8080/cars/update/:registration_number
- Request Body:
```
{
  "field": "colour",
  "value": "Blue"
}
```
## Delete a Specific Car
- Endpoint: DELETE http://localhost:8080/cars/delete/:registration_number
- Request Body: None

## List All Cars
- Endpoint: GET http://localhost:8080/cars/listAllCars
- Request Body: None

## List Cars Older Than 5 Years
- Endpoint: GET http://localhost:8080/cars/listOlderThan5Years
- Request Body: None

# Notes
- Ensure MongoDB is running and accessible using the connection string provided in the .env file.
- Adjust the MongoDB URI as per your setup.

# Screenshot
<img width="781" alt="Screenshot 2024-07-08 at 21 19 44" src="https://github.com/Mishismail/car-inventory/assets/140344029/582a56c8-dc3e-45e2-81b0-62f46bfed1e8">








