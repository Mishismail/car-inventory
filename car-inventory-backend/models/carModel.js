// models/carModel.js

import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  model: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  registration_number: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  previous_owners: [
    {
      model: {
        type: Number,
        required: true,
      },
      make: {
        type: String,
        required: true,
      },
      colour: {
        type: String,
        required: true,
      },
      registration_number: {
        type: String,
        required: true,
      },
      owner: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  ],
});

const Car = mongoose.model('Car', carSchema);

export default Car;