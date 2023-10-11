// routes/carRoutes.js
import express from 'express'
const router = express.Router();
import carController from '../controllers/carController'

// Add routes for CRUD operations
router.post('/add', carController.addCar);
router.put('/update/:registrationNumber', carController.updateCar);
router.delete('/delete/:registrationNumber', carController.deleteCar);
router.get('/listAll', carController.listAllCars);
router.get('/listOlderThan5Years', carController.listCarsOlderThan5Years);

module.exports = router;
