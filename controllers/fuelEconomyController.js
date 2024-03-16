// const classifyFuelEconomy = require('../utils/classifyFuelEconomy.js');
import UserModel from '../models/User.js';
import classifyFuelEconomy from '../utils/classifyFuelEconomy.js';

// class FuelEconomyController {
//     static analysis = async(req, res) =>{
//           const {vehicleClass, distanceTraveled, fuelConsumed} = req.body;
//           const analyseInput  = {
//             vehicleClass,
//             distanceTraveled,
//             fuelConsumed
//           }   

//           const analysisResult = classifyFuelEconomy(analyseInput);
//           if(!analysisResult) res.send({status : "failed", message : "Fuel analysis failded" });
          
//           //saving this fuel info to user profile 
//           const userId = req.user.id;
//           const users = await UserModel.findByIdAndUpdate(userId , { $push : {fuelData : analysisResult}}); 
//           console.log('updated user---', users)
//           return res.send(analysisResult);
          
//     }  
// }

class FuelEconomyController {
  static analysis = async(req, res) =>{
    console.log("req body--------------",req.body)
      const { vehicleClass, distanceTraveled, fuelConsumed } = req.body;
      const analyseInput  = {
          vehicleClass,
          distanceTraveled,
          fuelConsumed
      };
      
      console.log("analyseInput----", analyseInput);


      const analysisResult = classifyFuelEconomy(analyseInput);
      if (!analysisResult) {
          return res.send({ status : "failed", message : "Fuel analysis failed" });
      }
        
      // Saving this fuel info to user profile 
      const userId = req.user.id;
      try {
          const updatedUser = await UserModel.findByIdAndUpdate(userId, { $push: { fuelData: {...analysisResult,vehicleClass}  } }, { new: true });
          console.log('updated user---', updatedUser);
          return res.send(analysisResult);
      } catch (error) {
          console.error('Error updating user:', error);
          return res.status(500).send({ status: "failed", message: "Internal server error" });
      }
  }  

  static getAllTripData = async(req, res)=>{
       const {vehicleClass} = req.query;
       try{
         const user = await UserModel.findById(req.user.id);
         if(!vehicleClass){
           return  res.send({status : "success", message: "fetched successfully" , data : user.fuelData });
         }
         const filteredData = user.fuelData.filter((data)=>data.vehicleClass == vehicleClass); 
         return  res.send({status : "success", message: "fetched successfully" ,data : filteredData });

       }catch(err){
        console.log("fuel Data fetching err---",err);
       }
  }
}


export default FuelEconomyController;