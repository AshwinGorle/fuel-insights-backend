import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  name: { type: String, require: true },
  about: { type: String, require: true },
  rating: { type: String, require: true },
  reviews: [{ type: String, require: true }],
  duration: { type: String, require: true },
  status: { type: String, require: true, default: "pending" },
  domain: { type: String },
  thumbnailUrl: {
    type: String,
    default:
      "https://jogajog24.com/storage/app/uploads/public/624/dac/292/thumb_9505_750_420_0_0_crop.jpg",
  },

  authors: [
    {
      required: true,
      type: mongoose.Types.ObjectId,
    },
  ],
  knowledgeBase: [
    {
      name: { type: String, require: true },
      link: { type: String, require: true },
    },
  ],
  content: [{
    type : mongoose.Types.ObjectId,
    ref : 'Section'
  }],

  // content : {chapters : []}
});

const section = {
  name: "section 1",
  numberOfTopics: 5,
  duration: "5minites",
  description: "about the section",
  topics: [{}],
};

const topic = {
  name: "topic name",
  duration: "topic duration",
  completed: false,
  videoUrl: "sdfdsdfsd",
  Overview: " ai generatied content",
  resourses: [{
    type : mongoose.Types.ObjectId,
    ref : "Resourse"
  }],
  notes: [{
    type : mongoose.Types.ObjectId,
    ref : "Note"
  }],
  Qnas : [{
    type : mongoose.Types.ObjectId,
    ref : "Comment"
  }]
};

const resourse = {
  name: "name of note",
  resourseUrl: "dknfkldsjflk",
  description: "description",
};

const note = {
  timeStamp : '5:01',
  description : "dsfnklsdj"  
}


const CourseModel = mongoose.model("course", courseSchema);

export default CourseModel;
