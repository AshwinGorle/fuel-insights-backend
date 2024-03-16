// const classifyFuelEconomy = require('../utils/classifyFuelEconomy.js');
import classifyFuelEconomy from '../utils/classifyFuelEconomy.js';

class FuelEconomyController {
    static analysis = async(req, res) =>{
          const {vehicleClass, distanceTraveled, fuelConsumed} = req.body;
          const analyseInput  = {
            vehicleClass,
            distanceTraveled,
            fuelConsumed
          }   

          const analysisResult = classifyFuelEconomy(analyseInput);
          if(!analysisResult) res.send({status : "failed", message : "Fuel analysis failded" });
          return res.send(analysisResult);
          
    }  
}

export default FuelEconomyController;