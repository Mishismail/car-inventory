import express from 'express';
import helmet from 'helmet'; // Middleware for enhancing security
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import carRoutes from './routes/carRoutes'

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/carInventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  // Use carRoutes for your API endpoints after the database connection is established
  app.use('/cars', carRoutes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

