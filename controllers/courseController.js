import CourseModel from "../models/Course.js";

class CourseController {
  static createCourse = async (req, res) => {
    const body = req.body;

    const { name, about, duration, thumbnailUrl, domain, authors } = body;
    console.log("this is aruthors", authors)
    if (!name || !about || !duration || !authors) {
      return res.send({ status: "failed", message: "All fields are required" });
    }
    try {
      const course = await CourseModel.create({
        name,
        about,
        duration,
        thumbnailUrl,
        domain,
        authors,
        content : []
      });

      return res.send({ status: "success", data: course });
    } catch (error) {
      return res.send({ status: "failed", message: "Failed to create course" });
    }
  };

  static updateCourse = async (req, res) => {
    const { courseId } = req.params;
    console.log("courseId in controller ", courseId);
    const data = req.body.data;

    console.log("-------------", data);

    if (!courseId) {
      res.send({ status: "failed", message: "Course update fail" });
    }
    try {
      const course = await CourseModel.findByIdAndUpdate(courseId, {
        content: data,
      });

      res.send({ status: "success", data: course });
    } catch (error) {
      console.log("update eroor ", error);
    }
  };

  static getAllCourses = async (req, res) => {
    console.log("reached to get allcourses")
    try {
      const courses = await CourseModel.find();
      res.send({ status: "success", data: courses });
    } catch (err) {
      res.send({
        status: "failed",
        message: "Network error! Please try Again",
      });
    }
  };

  static getMyCourses = async (req, res) => {
    try {
      const userId  = req.user._id;
      console.log("userid", userId);
      const courses = await CourseModel.find({ authors: { $in: [userId] } });
      res.send({ status: "success", data: courses });
    } catch (err) {
      res.send({
        status: "failed",
        message: "Network error! Please try Again",
      });
    }
  };

  static getCourseById = async (req, res) => {
    //work to do 
    // implement logic so that only the authors and admin can edit the course
    const { courseId } = req.params;
    console.log("request for course with ", courseId);
    try {
      const response = await CourseModel.findById(courseId).populate('content');
      res.send({
        status: "success",
        message: "Start Editing Course!",
        data: response,
      });
    } catch (err) {
      res.send({ status: "failed", message: "Course Not Found !" });
    }
  };

  static addKnowlegebase = async (req, res) => {
    const { courseId } = req.params;
    const knowledge = req.body.knowledgeBase;

    try {
      const course = await CourseModel.findById(courseId);
      const prevKnowledgeBase = course.knowledgeBase;
      const newKnowledgeBase = [...prevKnowledgeBase, knowledge];
      const response = await CourseModel.findByIdAndUpdate(courseId, {
        knowledgeBase: newKnowledgeBase,
      });
      res.send({
        status: "success",
        message: "knowledge Base updated successfully!",
      });
    } catch (error) {
      console.log("my error ", error);
      res.send({ status: "failed", message: "not added!" });
    }
  };
  static getKnowlegebase = async (req, res) => {
    const { courseId } = req.params;

    try {
      const response = await CourseModel.findById(courseId);
      res.send({
        status: "success",
        data: response,
        message: "knowledge Base fetched successfully!",
      });
    } catch (error) {
      console.log("my error ", error);
      res.send({ status: "failed", message: "can not fetched!" });
    }
  };
}

export default CourseController;
