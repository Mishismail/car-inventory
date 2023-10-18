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

app.use('/cars', carRoutes);

const uri = 'mongodb+srv://HyperionDev-StudentMI2302:E7TEgkpoR0ItNdA1@hyperiondevl3t06.kvqx9lv.mongodb.net/mydb_test';

mongoose.connect(uri, {
  useNewUrlParser: true, // Use the new parser
  useUnifiedTopology: true, // Use the new server discovery and monitoring engine
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



