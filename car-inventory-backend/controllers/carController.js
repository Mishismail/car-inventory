//carController.js
import { Car } from '../models/carModel.js';

// Create a new car
export const addCar = async (req, res) => {
  try {
      const newCar = new Car(req.body);
      const car = await newCar.save();
      res.status(201).json({ message: 'Car added successfully', car });
  } catch (error) {
      console.error('Error adding the car', error);
      res.status(500).json({ error: 'Could not add the car. Please try again.' });
  }
};

// Update a car by registration number
export const updateCar = (req, res) => {
    const { registration_number, field, value } = req.body;
    const query = { registration_number };
    const update = { $set: { [field]: value } };
    const options = { new: true };

    Car.findOneAndUpdate(query, update, options, (err, updatedCar) => {
        if (err) {
            res.status(500).json({ error: 'Could not update the car.' });
        } else if (!updatedCar) {
            res.status(404).json({ error: 'Car not found' });
        } else {
            res.json(updatedCar);
        }
    });
};

// Delete a car by registration number
export const deleteCar = (req, res) => {
    const { registration_number } = req.params;
    const query = { registration_number };

    Car.findOneAndRemove(query, (err, deletedCar) => {
        if (err) {
            res.status(500).json({ error: 'Could not delete the car. Please try again.' });
        } else if (!deletedCar) {
            res.status(404).json({ error: 'Car not found' });
        } else {
            res.status(200).json({ message: 'Car deleted successfully', car: deletedCar });
        }
    });
};

// List all cars
export const listAllCars = (req, res) => {
    Car.find({}, (err, allCars) => {
        if (err) {
            res.status(500).json({ error: 'Could not fetch cars. Please try again.' });
        } else if (allCars.length === 0) {
            res.status(404).json({ message: 'No cars found' });
        } else {
            res.status(200).json({ message: 'Cars fetched successfully', cars: allCars });
        }
    });
};

// List cars older than 5 years
export const listCarsOlderThan5Years = (req, res) => {
    const fiveYearsAgo = new Date();
    fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

    Car.find({ model: { $lt: fiveYearsAgo.getFullYear() } }, (err, oldCars) => {
        if (err) {
            res.status(500).json({ error: 'Could not fetch older cars. Please try again.' });
        } else if (oldCars.length === 0) {
            res.status(404).json({ message: 'No older cars found' });
        } else {
            const formattedOldCars = oldCars.map((car) => ({
                model: car.model,
                make: car.make,
                registration_number: car.registration_number,
                owner: car.owner,
            }));
            res.status(200).json({ message: 'Older cars fetched successfully', cars: formattedOldCars });
        }
    });
};

export default Car;
