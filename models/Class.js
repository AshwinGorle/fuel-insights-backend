import mongoose, { Schema } from "mongoose";
const classSchema = mongoose.Schema({
  name: { type: String },
  teacher: { type: Schema.Types.ObjectId },
  studentEnrolled: [
    {
      type: Schema.Types.ObjectId, // Specifies that it's an array of ObjectIds
      ref: "User", // Specifies the referenced model (assuming you have a 'Student' model)
    },
  ],
  authors: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
  students: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
  thumbnailUrl : {type :String}, 
  bannerUrl : {type :String}, 
  startDate : {
    type : Date
  },
  endDate : {
    type : Date
  },
  assigments : [
    {
        type : Schema.Types.ObjectId,
        ref : 'Assigment'
    }
  ],
  createdAt : {type : Date}, 
  updatedAt : {type : Date}, 
  description : {type : String},
  notices: [{ type: mongoose.Types.ObjectId, ref: "Notice" }] 


});

const ClassModel = mongoose.model('Class', classSchema);
export default ClassModel;

