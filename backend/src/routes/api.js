import { Router } from 'express';

import * as studentController from '../controllers/studentController.js';
import * as issueController from '../controllers/issueController.js';
import * as bookController from '../controllers/bookController.js';

const router = Router();

router.get('/students', studentController.getAllStudents);
router.post('/students', studentController.createStudent);
router.put('/students', studentController.updateStudent);
router.delete('/students', studentController.deleteStudent);

router.get('/books', bookController.getBooks);
router.post('/books', bookController.createBook);
router.put('/books', bookController.updateBook);
router.delete('/books', bookController.deleteBook);



router.get('/issues', issueController.getAllIssues);
router.post('/issues', issueController.issueBook);
router.post('/issues/return', issueController.returnBook;
