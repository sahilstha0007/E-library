import * as studentService from "../services/studentService.js";
import { validateStudent } from "../utils/validation.js";

export const getStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createStudent = async (req, res) => {
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).json({ error: error.dates[0].message });

  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {}
  res.status(500).json({ error: err.message });
};

export const updateStudent = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body);
    res.json(student);
  } catch (err) {
    res.send(500).json({ error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try{
    await studentService.deleteStudent(req.params.id);
    res.json({
      message:"Student deleted successfully"
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

