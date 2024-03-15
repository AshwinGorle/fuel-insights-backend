import mongoose from "mongoose";
import ClassModel from "../models/Class.js";

export const getClassById = async(req, res)=>{
  const classId = req.params.classId;
  if(!classId) return res.send({ status: "failed", message: "Invalid Class Id" });
  try{
    const response = await ClassModel.findById(classId);
    return res.send({ status: "success", message: "class fetched successfully", response });
  }catch(err){
    console.log("class geting error ",err);
    return res.send({ status: "failed", message: "Network Issue! can't get class" });
  }
}

export const createClass = async (req, res) => {
  const body = req.body;

  const {
    name,
    description,
    startDate,
    endDate,
    authors,
    students,
    createdAt,
    updatedAt,
  } = body;
  if (!name)
    return res.send({ status: "failed", message: "All fields are required" });

  try {
    console.log("trying to create");
    const newClass = await ClassModel.create({
      name,
      teacher: req.user._id,
      createdAt: new Date(),
      updatedAt: new Date(),
      description,
      authors,
      students,
    });

    return res.send({
      status: "success",
      message: "Class created",
      data: newClass,
    });
  } catch (err) {
    return res.send({ status: "failed", message: "Class not created!" });
  }
};

export const deleteClass = async (req, res) => {
  const classId = req.params.classId;
  if (!classId)
    return res.send({ status: "failed", message: "Enter ClassId to delete" });

  try {
    const ClassToDelete = await ClassModel.findById(classId);
    if (!ClassToDelete) {
      return res.send({
        status: "failed",
        message: "Cant't delete! invalid Class Id",
      });
    }

    if (
      !(
        JSON.stringify(ClassToDelete?.teacher) ===
          JSON.stringify(req?.user?._id) || req?.user?.role == "admin"
      )
    ) {
      return res.send({
        status: "failed",
        message: "Can't delete! you havn't created it",
      });
    }
    const response = await ClassModel.findByIdAndDelete(classId);
    console.log("deleted successfully ", response);
    return res.send({
      status: "success",
      message: "calss deleted",
      data: response,
    });
  } catch (err) {
    console.log("class delteing err ", err);
    return res.send({
      status: "failed",
      message: "network error while deleting",
    });
  }
};

export const editClass = async (req, res) => {
  const classId = req.params.classId;
  const { name, description, bannerUrl, thumbnailUrl, authors } = req.body;
  if (!classId)
    return res.send({
      status: "failed",
      message: "Enter ClassId to update class",
    });

  try {
    const ClassToUpdate = await ClassModel.findById(classId);
    if (!ClassToUpdate) {
      return res.send({
        status: "failed",
        message: "Cant't Update! invalid Class Id",
      });
    }

    if (
      !(
        JSON.stringify(ClassToUpdate?.teacher) ===
          JSON.stringify(req?.user?._id) || req?.user?.role == "admin"
      )
    ) {
      return res.send({
        status: "failed",
        message: "Can't Update! you havn't created this class",
      });
    }
    const response = await ClassModel.findByIdAndUpdate(classId, {
      name,
      description,
      bannerUrl,
      thumbnailUrl,
      authors,
    });
    console.log("Updated successfully ", response);
    return res.send({
      status: "success",
      message: "calss Updated!",
      data: response,
    });
  } catch (err) {
    console.log("class updating err ", err);
    return res.send({
      status: "failed",
      message: "network error while deleting",
    });
  }
};

export const addRemoveAuthors = async (req, res) => {
  const { authors, students } = req.body;
  const classId = req.params.classId;
  const action = req.params.action;
  const role = req.params.role;

  // role = students or authors

  if (!action)
    return res.send({
      status: "failed",
      message: "Action required to add/remove authors",
    });

  if (!classId)
    return res.send({
      status: "failed",
      message: "Class id is required to add/remove authors",
    });

  const classToUpdate = await ClassModel.findById(classId);
  if (!classToUpdate) {
    return res.send({
      status: "failed",
      message: "Cant't delete! invalid Class Id",
    });
  }

  if (
    !(
      JSON.stringify(classToUpdate?.teacher) ===
        JSON.stringify(req?.user?._id) || req?.user?.role == "admin"
    )
  ) {
    return res.send({
      status: "failed",
      message: "Can't Update! you havn't created this class",
    });
  }

  let currentIdsData;
  let idsToUpdate;
  if (role == "authors") {
    currentIdsData = classToUpdate.authors;
    idsToUpdate = authors;
    if (authors == null)
      return res.send({
        status: "failed",
        message: "No Authers were provided to add or remove",
      });
  } else if (role == "students") {
    currentIdsData = classToUpdate.students;
    idsToUpdate = students;
    if (students == null)
      return res.send({
        status: "failed",
        message: "No Students were provided to add or remove",
      });
  } else {
    return res.send({
      status: "failed",
      message: "provide proper role for add/remove from class",
    });
  }
  let currentIdsInString = currentIdsData.map((objId) => objId.toString());
  let updatedAuthors;
  if (action == "add") {
    const updatedIdsDataSet = [
      ...new Set([...currentIdsInString, ...idsToUpdate]),
    ];
    updatedAuthors = Array.from(
      updatedIdsDataSet,
      (id) => new mongoose.Types.ObjectId(id)
    );
    console.log("updated aruthors -----", updatedAuthors);
  } else if (action == "remove") {
    updatedAuthors = currentIdsInString.filter(
      (author) => !idsToUpdate.includes(author)
    );
    updatedAuthors = Array.from(
      updatedAuthors,
      (id) => new mongoose.Types.ObjectId(id)
    );
    console.log("updated aruthors -----", updatedAuthors);
  } else {
    console.log("Invalid Action");
    return res.send({
      status: "failed",
      message: "Invalid Action for adding/remove author",
    });
  }

  let response;
  if (role == "authors") {
    response = await ClassModel.findByIdAndUpdate(classId, {
      authors: updatedAuthors,
    });
  } else {
    response = await ClassModel.findByIdAndUpdate(classId, {
      students: updatedAuthors,
    });
  }

  console.log("updated class --", response);
  return res.send({
    status: "success",
    message: "calss Updated!",
    data: response,
  });
};
