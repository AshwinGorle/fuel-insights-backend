import SectionModel from "../models/Section.js";
import mongoose from "mongoose";
import CourseModel from "../models/Course.js";
import TopicModel from "../models/Topic.js";
class editorController {
  static addSection = async (req, res) => {
    console.log("creating section");
    const { courseId } = req.query;
    console.log("courseId", courseId);
    console.log("this is body ", req.body);
    const { name, description, duration } = req.body;

    if (!courseId || !name)
      return res.send({
        status: "failed",
        message: "Enter couse Id to add section!",
      });
    if (!name)
      return res.send({ status: "failed", message: "all fields are required" });

    try {
      const course = await CourseModel.findById(courseId);
      if (!course)
        res.send({
          status: "failed",
          message: "edit request for invalid course!",
        });

      const newSection = await SectionModel.create({
        name,
        description,
        duration,
        numberOfTopics: 0,
        topics: [],
      });

      await CourseModel.findByIdAndUpdate(courseId, {
        $push: { content: newSection._id },
      });

      res.send({
        status: "success",
        message: "section  created successfully",
        data: newSection,
      });
    } catch (err) {
      res.send({
        status: "failed",
        message: "error creating the section",
        err,
      });
    }
  };

  static removeSection = async (req, res) => {
    console.log("remove section");
    const { courseId, sectionId } = req.query;

    if (!courseId || !sectionId)
      return res.send({
        status: "failed",
        message: "Enter couseId and section id to delete section!",
      });

    try {
      const course = await CourseModel.findById(courseId);
      if (!course)
        res.send({
          status: "failed",
          message: "edit request for invalid course!",
        });

      const section = await SectionModel.findByIdAndDelete(sectionId);

      // Remove the section ID from the course's content array
      await CourseModel.findByIdAndUpdate(courseId, {
        $pull: { content: sectionId },
      });

      res.send({
        status: "success",
        message: "section  deleted successfully!",
      });
    } catch (err) {
      res.send({
        status: "failed",
        message:
          "error deleting section the section, may be section id is wrong",
        err: err,
      });
    }
  };

  // static a = {
  //   name,
  //   duration,
  //   completed,
  //   videoUrl,
  //   overwiev,
  //   resources,
  // };

  

  static addTopic = async (req, res) => {
    const { action, sectionId } = req.query;
    const { name, description, duration } = req.body;
    if (!action || !sectionId)
      return res.send({
        status: "failed",
        message: "please provide valid sectionId or action",
      });

    try {
      const section = await SectionModel.findById(sectionId);
      if (!section)
        return res.send({
          status: "failed",
          message: "To add topic, Section not found!",
        });

      const topic = await TopicModel.create({
        name,
        duration,
        description,
      });
      if (!topic)
        return res.send({
          status: "failed",
          message: "Topic not created",
        });

      await SectionModel.findByIdAndUpdate(sectionId,{$push: { topics: topic._id },})
      return res.send({
        status: "success",
        message: "Topic added successfully",
      });
    } catch (err) {
      console.log("error occured");
      return res.send({
        status: "failed",
        message: "Topic not added! something went wrong",
      });
    }
  };
  



  
}

export default editorController;
