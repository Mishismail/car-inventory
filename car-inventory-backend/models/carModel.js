// models/carModel.js
import mongoose from 'mongoose'

let carSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Car', carSchema);

