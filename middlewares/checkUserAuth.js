import Jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import UserController from "../controllers/userController.js";

export const checkForUserAuthentication = async (req, res, next) => {
  req.user = null;
  let token;
  const authorizationValue = req?.headers["authorization"];
  if(!authorizationValue || !authorizationValue.startsWith('Bearer')) return next();
  
  token = authorizationValue.split(" ")[1];
  
  const user = await UserController.getUser(token);
  
  req.user = user;
  console.log("user from token ",user)
  
   return next();
};

export const restrictTo = (roles=[])=>{
  return function (req, res, next){
      if (!req.user) return res.status(401).send({ status: "failed", message: "Unauthorized user!" });
      if (roles.includes("all")) return next();
      if (!roles.includes(req?.user?.role)) return res.status(401).send({ status: "failed", message: "Unauthorized user!" });
       next();
      
     }
}





