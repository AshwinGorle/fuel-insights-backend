import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {type : String, required : true, trim : true},
    email : {type : String, required : true, trim : true},
    password : {type : String, required : true, trim : true},
    tc : {type : Boolean, required : true},
    role : {type : String},
    gender : {type : String},
    dob: { type: String },
    country: { type: String},
    city: { type: String},
    state: { type: String},
    phone : {type : String},
    organizationName : {type : String},
    specialization : {type : String},
    field: {type : String},
    education: {type : String},
    avatar: {type : String }

})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;