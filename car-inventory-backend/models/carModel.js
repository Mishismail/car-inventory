// models/carModel.js
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  model: Number,
  make: String,
  colour: String,
  registration_number: String,
  owner: String,
  address: String,
  previous_owners: [
    {
      model: Number,
      make: String,
      colour: String,
      registration_number: String,
      owner: String,
      address: String,
    },
  ],
});

const Car = mongoose.model('Car', carSchema);

export default Car;

