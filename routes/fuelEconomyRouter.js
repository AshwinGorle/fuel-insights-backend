 import express from "express"; 
import FuelEconomyController from '../controllers/fuelEconomyController.js'
import { restrictTo } from "../middlewares/checkUserAuth.js";
 const router = express.Router();


 router.post('/analysis',restrictTo(["all"]) ,FuelEconomyController.analysis);
 router.get('/get-trip-data',restrictTo(["all"]) ,FuelEconomyController.getAllTripData);


 export default router;