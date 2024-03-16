 import express from "express"; 
import FuelEconomyController from '../controllers/fuelEconomyController.js'
 const router = express.Router();


 router.post('/analysis', FuelEconomyController.analysis);


 export default router;