import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import transporter from "../config/emailConfig.js";


class UserController {
  static userRegistration = async (req, res) => {
    const {
      name,
      email,
      password,
      password_confirmation,
      role = "student",
      tc = true,
      phone,
    } = req.body;
   
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (name && email && password && password_confirmation && tc && role) {
        if (password === password_confirmation) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassowrd = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name,
              email,
              password: hashedPassowrd,
              role,
              tc: Boolean(tc),
              phone,

            });
            await doc.save();
            const savedUser = await UserModel.findOne({ email: email });
            const token = Jwt.sign(
              { userId: savedUser._id, userEmail: savedUser.email },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            res.status(201).send({
              status: "success",
              message: "User Created Successfully",
              token: token,
              data: savedUser,
            });
          } catch (err) {
            console.log("----------", err);
            res.send({
              status: "failed",
              message: "User not created",
              err: err,
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "Confirmation msg does not match",
          });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    }
  };

  static userLogin = async (req, res) => {
    console.log("login called");
    const { password, email } = req.body;
    if (password && email) {
      try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch && user.email === email) {
            const token = Jwt.sign(
              { userId: user._id, email: user.email },
              process.env.JWT_SECRET_KEY
            );
            res.cookie("token", token).send({
              status: "success",
              token: token,
              message: "Loged in successfully",
              data: user,
            });
          } else {
            res.send({
              status: "failed",
              message: "Email or Passowrd is wrong",
            });
          }
        } else {
          res.send({ status: "failed", message: "Email does not exists" });
        }
      } catch (err) {
        res.send({
          starus: "failed",
          message: "something went wrong",
          error: err,
        });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  };

  static resetUserPassword = async (req, res) => {
    const { password, password_confirmation } = req.body;
    if (password && password_confirmation) {
      if (password === password_confirmation) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassowrd = await bcrypt.hash(password, salt);
          await UserModel.findByIdAndUpdate(req.user._id, {
            password: hashedPassowrd,
          });
          res.send({
            status: "success",
            message: "Password changed successfully",
          });
        } catch (err) {
          res.send({
            status: "failed",
            message: "something went wrong try again",
          });
        }
      } else {
        res.send({ status: "failed", message: "both password does not match" });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  };

  static sendResetPasswordEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      res.send({ status: "failed", message: "All fields are required" });
    } else {
      const user = await UserModel.findOne({ email, email });
      if (user) {
        const secret_key = user._id + process.env.JWT_SECRET_KEY;
        const token = Jwt.sign({ userId: user._id }, secret_key, {
          expiresIn: "15m",
        });
        const link = `${process.env.BASE_URL}/user/reset/${user._id}/${token}`;
        let info = await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: user.email,
          subject: "Your Password Resset Link ",
          html: `<a href=${link}>click Here to reset yourt password </a>`,
        });
        res.send({
          status: "success",
          message: "Password Reset Email sent.... Please check your email!",
          info: info,
        });
      } else {
        res.send({ status: "failed", message: "Email not valid" });
      }
    }
  };

  static resetUserPasswordWithLink = async (req, res) => {
    const { password, password_confirmation } = req.body;
    const { token, userId } = req.params;
    console.log("token ", token);
    console.log("userId ", userId);
    if (password && password_confirmation) {
      const user = await UserModel.findOne({ _id: userId });
      console.log(user);
      if (user) {
        try {
          const new_secret = userId + process.env.JWT_SECRET_KEY;
          Jwt.verify(token, new_secret);
          const salt = await bcrypt.genSalt(10);
          const newHashedPassowrd = await bcrypt.hash(password, salt);
          const updatedUser = await UserModel.findByIdAndUpdate(userId, {
            $set: { password: newHashedPassowrd },
          });
          res.send({
            status: "success",
            message: "Passowrd changed Successfully",
          });
        } catch {
          res.send({ status: "failed", message: "Invalid token!" });
        }
      } else {
        res.send({ status: "failed", message: "Invalid User" });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  };

  static getUsers = async (req, res) => {
    const { role } = req.params;
    try {
      const users = await UserModel.find({ role: role }).select("-password");
      res.send({
        status: "success",
        message: "users fetched successfully",
        data: users,
      });
    } catch (err) {
      res.send({ status: "failed", message: "unable to fech teacher! " });
    }
  };

  // static approveCourse = async (req, res) => {
  //   console.log("entered here")
  //   const { courseId } = req.params;
  //   console.log("courseid", courseId);
  //   const body = req.body;
  //   console.log("body", body, courseId);
  //   try {
  //     const response = await CourseModel.findByIdAndUpdate(courseId, {
  //       status: body.status,
  //     });
  //     res.send({ status: "success", message: `cousre ${body.status}!` });
  //   } catch (err) {
  //     res.send({ status: "failed", message: "couse not updated" });
  //   }
  // };

  static getUser = async (token)=>{
    try{ 
    const {userId, email} =  Jwt.verify(token, process.env.JWT_SECRET_KEY);
    if(!userId) return null;

    const user = await UserModel.findById(userId).select('-password')
    if(!user) return null;
    return user;
    
    }catch (err) {
      console.log("token err : ", err);
      return null;
    }
}

 static getUserByToken = (req, res)=>{
   let user = null;
   if(req.user !== null) user = req.user;
   console.log("geting initial user ", user)
     res.send({staus : "success", data : user})
         
 }

  static updateUser = async (req, res) => {
    const {
      id,
      name,
      email,
      phone,
      role,
      dob,
      gender,
      state,
      city,
      country,
      education,
      organizationName,
      currentYear,
      specialization,
      field,
      avatar
    } = req.body;
    try {
      const user = await UserModel.findByIdAndUpdate(req.user._id, {
        name,
        email,
        phone,
        role,
        dob,
        gender,
        state,
        city,
        country,
        education,
        organizationName,
        currentYear,
        specialization,
        field,
        avatar
      }).select('-password');

      res.send({
        status: "success",
        message: `user updated successfully`,
        data: user,
      });
    } catch (error) {
      res.send({ status: "failed", message: "user not updated" });
    }
  };

}

export default UserController;
