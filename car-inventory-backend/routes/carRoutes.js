//carRoutes.js
import express from 'express';
import {
    addCar,
    updateCar,
    deleteCar,
    listAllCars,
    listCarsOlderThan5Years,
} from '../controllers/carController.js'; // Import all exports from carController.js

const router = express.Router();

// Add routes for CRUD operations
router.post('/add', addCar);
router.put('/update/:registration_number', updateCar);
router.delete('/delete/:registration_number', deleteCar);
router.get('/listAllCars', listAllCars);
router.get('/listCarsOlderThan5Years', listCarsOlderThan5Years);

export default router;


