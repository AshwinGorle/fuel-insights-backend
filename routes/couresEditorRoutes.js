import  express from "express";
const router = express.Router();
import { restrictTo } from "../middlewares/checkUserAuth.js";
import EditorController from "../controllers/editorController.js";

// section action = add or remove
router.post('/section/add',restrictTo(["teacher", "admin"]),EditorController.addSection);
router.delete('/section/remove',restrictTo(["teacher", "admin"]),EditorController.removeSection);

//topic routes
router.post('/section/topic',restrictTo(["teacher", "admin"]),EditorController.addTopic);


export default router;