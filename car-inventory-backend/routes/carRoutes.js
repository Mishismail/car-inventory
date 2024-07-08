//carRoutes.js

import express from 'express';
import {
    addCar,
    updateCar,
    deleteCar,
    listAllCars,
    listCarsOlderThan5Years,
} from '../controllers/carController.js';

const router = express.Router();

router.post('/add', addCar);
router.put('/update/:registration_number', updateCar);
router.delete('/delete/:registration_number', deleteCar);
router.get('/listAllCars', listAllCars);
router.get('/listOlderThan5Years', listCarsOlderThan5Years);

export default router;