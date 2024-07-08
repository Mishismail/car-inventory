//carController.js

import Car from '../models/carModel.js';

// Add a new car
export const addCar = async (req, res) => {
    try {
      const { registration_number, model, make, colour, owner, address } = req.body;
  
      if (!registration_number) {
        return res.status(400).json({ error: 'Registration number is required' });
      }
  
      const newCar = new Car({ registration_number, model, make, colour, owner, address });
      const car = await newCar.save();
      res.status(201).json({ message: 'Car added successfully', car });
    } catch (error) {
      console.error('Error adding the car', error);
      if (error.code === 11000) {
        res.status(400).json({ error: 'Registration number already exists' });
      } else {
        res.status(500).json({ error: 'Could not add the car. Please try again.' });
      }
    }
  };


// Update a car by registration number
export const updateCar = async (req, res) => {
  try {
    const { registration_number } = req.params;
    const { field, value } = req.body;

    if (!field || !value) {
      return res.status(400).json({ error: 'Field and value are required' });
    }

    const update = { [field]: value };
    const options = { new: true };

    const updatedCar = await Car.findOneAndUpdate(
      { registration_number },
      { $set: update },
      options
    );

    if (!updatedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.json(updatedCar);
  } catch (error) {
    console.error('Error updating the car', error);
    res.status(500).json({ error: 'Could not update the car. Please try again.' });
  }
};

// Delete a car by registration number
export const deleteCar = async (req, res) => {
  try {
    const { registration_number } = req.params;
    const query = { registration_number };

    const deletedCar = await Car.findOneAndRemove(query);
    if (!deletedCar) {
      res.status(404).json({ error: 'Car not found' });
    } else {
      res.status(200).json({ message: 'Car deleted successfully', car: deletedCar });
    }
  } catch (error) {
    console.error('Error deleting the car', error);
    res.status(500).json({ error: 'Could not delete the car. Please try again.' });
  }
};

// List all cars
export const listAllCars = async (req, res) => {
  try {
    const allCars = await Car.find({});
    if (allCars.length === 0) {
      res.status(404).json({ message: 'No cars found' });
    } else {
      res.status(200).json({ message: 'Cars fetched successfully', cars: allCars });
    }
  } catch (error) {
    console.error('Could not fetch cars', error);
    res.status(500).json({ error: 'Could not fetch cars. Please try again.' });
  }
};

// List cars older than 5 years
export const listCarsOlderThan5Years = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const fiveYearsAgo = currentYear - 5;

    const oldCars = await Car.find({ model: { $lt: fiveYearsAgo } });
    if (oldCars.length === 0) {
      res.status(404).json({ message: 'No older cars found' });
    } else {
      res.status(200).json({ message: 'Older cars fetched successfully', cars: oldCars });
    }
  } catch (error) {
    console.error('Could not fetch older cars', error);
    res.status(500).json({ error: 'Could not fetch older cars. Please try again.' });
  }
};

export default Car;
