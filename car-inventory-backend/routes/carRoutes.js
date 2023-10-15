// routes/carRoutes.js
// routes/carRoutes.js
import express from 'express';
import * as carController from '../controllers/carController.js'; // Import all exports from carController.js

const router = express.Router();

// Add routes for CRUD operations
router.post('/add', carController.addCar);
router.put('/update/:registration_number', carController.updateCar);
router.delete('/delete/:registration_number', carController.deleteCar);
router.get('/listAll', carController.listAllCars);
router.get('/listOlderThan5Years', carController.listCarsOlderThan5Years);

export default router;


