// server.js

import express from 'express';
import helmet from 'helmet'; // Middleware for enhancing security
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import carRoutes from './routes/carRoutes.js';
import cors from 'cors'; // Import CORS middleware

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Ensure this matches your frontend origin
  methods: 'GET,PUT,POST,DELETE',
  credentials: true, 
}));

app.use('/cars', carRoutes);

const uri = 'mongodb+srv://mishkaismail:K4weX7SkXXiJS9B7@carinventory.rm8uvpa.mongodb.net/?retryWrites=true&w=majority&appName=CarInventory';

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});