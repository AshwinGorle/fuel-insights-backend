import express from "express";
import UserController from "../controllers/userController.js";
const router = express.Router();
import { restrictTo } from "../middlewares/checkUserAuth.js";

//public routes
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);``
router.get("/get-user-by-token", UserController.getUserByToken);``
router.post(
  "/send-password-reset-email", 
  UserController.sendResetPasswordEmail
);
router.post(
  "/reset-password/:userId/:token",
  UserController.resetUserPasswordWithLink
);

//protected routes
router.get("/get-users/:role", restrictTo(["all"]), UserController.getUsers);
router.post("/update-user", restrictTo(["all"]), UserController.updateUser);

router.post(
  "/changepassword",
  restrictTo(["all"]),
  UserController.resetUserPassword
);

//adminRoutes

// router.post('/get-knowledgebases', checkUserAuth , restrictToAdmin,UserController.approveCourse)
//router.post("/audit-course/:courseId", restrictTo(["admin"]) ,UserController.approveCourse);

export default router;
