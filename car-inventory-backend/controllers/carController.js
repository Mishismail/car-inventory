// controllers/carController.js
import Car from '../models/carModel.js'

exports.addCar = async (req, res) => {
    try {
      const newCar = new Car(req.body);
      const savedCar = await newCar.save();
      if (savedCar) {
        res.status(201).json({ message: 'Car added successfully', car: savedCar });
      } else {
        res.status(500).json({ error: 'Could not add the car. Please try again.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not add the car. Please try again.' });
    }
  };
  

exports.updateCar = async (req, res) => {
    try {
      const { registration_number, field, value } = req.body;
      const updatedCar = await Car.findOneAndUpdate(
        { registration_number },
        { $set: { [field]: value } },
        { new: true }
      );
      if (!updatedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json(updatedCar);
    } catch (error) {
      res.status(500).json({ error: 'Could not update the car.' });
    }
  };

 exports.deleteCar = async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const deletedCar = await Car.findOneAndRemove({ registration_number: registrationNumber });

    if (!deletedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.status(200).json({ message: 'Car deleted successfully', car: deletedCar });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the car. Please try again.' });
  }
};


  exports.listAllCars = async (req, res) => {
    try {
      const allCars = await Car.find();
      if (allCars.length > 0) {
        res.status(200).json({ message: 'Cars fetched successfully', cars: allCars });
      } else {
        res.status(404).json({ message: 'No cars found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch cars. Please try again.' });
    }
  };
  

  exports.listCarsOlderThan5Years = async (req, res) => {
    try {
      const fiveYearsAgo = new Date();
      fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
  
      const oldCars = await Car.find({ model: { $lt: fiveYearsAgo.getFullYear() } });
  
      if (oldCars.length > 0) {
        const formattedOldCars = oldCars.map((car) => ({
          model: car.model,
          make: car.make,
          registration_number: car.registration_number,
          owner: car.owner,
        }));
        res.status(200).json({ message: 'Older cars fetched successfully', cars: formattedOldCars });
      } else {
        res.status(404).json({ message: 'No older cars found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch older cars. Please try again.' });
    }
  };
  