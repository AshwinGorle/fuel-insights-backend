
import express from 'express'
import { restrictTo } from '../middlewares/checkUserAuth.js';
import { addRemoveAuthors, createClass, deleteClass, editClass, getClassById } from '../controllers/classController.js';
const router = express.Router();

router.get('/get-class/:classId',restrictTo(["all"]), getClassById)
router.post('/create-class', restrictTo(["admim", "teacher"]), createClass)
router.post('/delete-class/:classId', restrictTo(["admim", "teacher"]), deleteClass)
router.post('/edit-class/:classId', restrictTo(["admim", "teacher"]), editClass)
router.post('/add-remove/:role/:action/:classId', restrictTo(["admim", "teacher"]), addRemoveAuthors)


export default router;