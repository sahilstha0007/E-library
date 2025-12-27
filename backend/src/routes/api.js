import { Router } from "express";

import * as studentController from "../controllers/studentController.js";
import * as issueController from "../controllers/issueController.js";
import * as bookController from "../controllers/bookController.js";

const router = Router();

router.get("/students", studentController.getStudents);
router.get("/students/:id", studentController.getStudent);
router.post("/students", studentController.createStudent);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBook);
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

router.get("/issues", issueController.getAllIssues);
router.post("/issues", issueController.issueBook);
router.post("/issues/return", issueController.returnBook);
export default router;
