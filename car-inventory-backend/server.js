// server.js
import express from 'express';
import helmet from 'helmet'; // Middleware for enhancing security
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import carRoutes from './routes/carRoutes.js';
import cors from 'cors'; // Import CORS middleware

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const uri = 'mongodb+srv://HyperionDev-StudentMI2302:E7TEgkpoR0ItNdA1@hyperiondevl3t06.kvqx9lv.mongodb.net/mydb_test';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', function () {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

mongoose.connection.once('open', function () {
  console.log('Successfully connected to the database');
});

// Use carRoutes for your API endpoints after the database connection is established
app.use('/cars', carRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



