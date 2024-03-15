import mongoose from "mongoose";

const connectDatabase  = async(DATABASE_URL)=>{
   const dbOptions = {
    dbName : "Mystore"
   }
   try{
     await mongoose.connect(DATABASE_URL, dbOptions)
    console.log("database connected...");
   }catch(err){
     console.log("db connection error : ",err);
   }
}

export default connectDatabase;