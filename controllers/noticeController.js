import NoticeModel from "../models/Notice";
import ClassModel from "../models/Class"; // Assuming you have a Class model

class NoticeController {
  static createNotice = async (req, res) => {
    try {
      const { createdBy, subject, description, attachment } = req.body;
      const classId = req.params.classId;

      // Create a new notice
      const newNotice = new NoticeModel({
        createdBy: req.user._id,
        class: classId, // Assign the classId to the class field
        createdAt: new Date(),
        updatedAt: new Date(),
        subject: subject,
        description: description,
        attachment: attachment,
      });

      // Save the new notice
      const savedNotice = await newNotice.save();

      // Update the corresponding class document
      await ClassModel.findByIdAndUpdate(classId, {
        $push: { notices: savedNotice._id },
      });

      // Send the response
      res.status(201).json({
        status: "success",
        message: "Notice created successfully",
        data: savedNotice,
      });
    } catch (error) {
      console.error("Error creating notice:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  static deleteNotice = async (req, res) => {
    try {
      const noticeId = req.params.noticeId; // Assuming the noticeId is passed in the request parameters

      // Check if the notice exists
      const notice = await NoticeModel.findById(noticeId);
      if (!notice) {
        return res
          .status(404)
          .json({ status: "failed", message: "Notice not found" });
      }
      
      if (
        !(
          JSON.stringify(notice?.createdBy) ===  JSON.stringify(req?.user?._id) || req?.user?.role == "admin"
        )
      ) {
        return res.send({
          status: "failed",
          message: "Can't delete! you havn't created this Notice",
        });
      }
      // Delete the notice
      await NoticeModel.findByIdAndDelete(noticeId);

      // Send success response
      res.json({ status: "success", message: "Notice deleted successfully" });
    } catch (error) {
      console.error("Error deleting notice:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  static updateNotice = async (req, res) => {
    try {
        const noticeId = req.params.noticeId; // Assuming the noticeId is passed in the request parameters

        // Check if the notice exists
        let notice = await NoticeModel.findById(noticeId);
        if (!notice) {
            return res.status(404).json({ status: "failed", message: "Notice not found" });
        }
        if (
            !(
              JSON.stringify(notice?.createdBy) ===  JSON.stringify(req?.user?._id) || req?.user?.role == "admin"
            )
          ) {
            return res.send({
              status: "failed",
              message: "Can't Update! you havn't created this Notice",
            });
          }
        
        // Update the notice
        const { subject, description, attachment } = req.body;
        notice.subject = subject || notice.subject;
        notice.description = description || notice.description;
        notice.attachment = attachment || notice.attachment;
        notice.updatedAt = new Date();

        // Save the updated notice
        notice = await notice.save();

        // Send success response with the updated notice
        res.json({ status: "success", message: "Notice updated successfully", data: notice });
    } catch (error) {
        console.error("Error updating notice:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}
}

export default NoticeController;
