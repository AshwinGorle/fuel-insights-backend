import express from "express";
import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
  class : {type : mongoose.Types.ObjectId, ref  : "Class"},
  createdAt : {type : Date},
  updatedAt : {type :Date},
  subject: { type: String },
  desciption: { type: String },
  attachment : [{
    name : {type : String},
    url : {type : String}
  }]
});

const NoticeModel = mongoose.model('Notice', noticeSchema);
export default NoticeModel;