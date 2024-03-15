import express from 'express';
import CourseController from '../controllers/courseController.js';
import { restrictTo } from '../middlewares/checkUserAuth.js';

const router = express.Router();

router.post('/create-course', restrictTo(["admin", "teacher"]), CourseController.createCourse);

router.post('/update-course/:courseId', restrictTo(["admin", "teacher"]), CourseController.updateCourse);

router.get('/get-all-courses', restrictTo(["all"]) , CourseController.getAllCourses);

router.get('/get-my-courses/', restrictTo(["admin", "teacher"]) ,CourseController.getMyCourses);

router.get('/get-course/:courseId',restrictTo(["all"]), CourseController.getCourseById);

router.post('/create-knowledgebase/:courseId',restrictTo(["teacher", "admin"]),CourseController.addKnowlegebase);

router.get('/get-knowledgebases/:courseId',restrictTo(["teacher", "admin"]), CourseController.getKnowlegebase);



export default router ;
