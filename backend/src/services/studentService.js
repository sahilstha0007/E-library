import prisma from "../config/db.js";

export const getAllStudents = async () => {
  return await prisma.student.findMany({
    orderBy: { id: "asc" },
  });
};

export const getStudentById = async (id) => {
  const studentId = parseInt(id);
  if (isNaN(studentId)) throw new Error("Invalid ID");
  return await prisma.student.findUnique({
    where: { id: studentId },
  });
};

export const createStudent = async (data) => {
  return await prisma.student.create({ data });
};

export const updateStudent = async (id, data) => {
  const studentId = parseInt(id);
  if (isNaN(studentId)) {
    throw new Error("Invalid student ID: Student Id must be a number");
  }
  return await prisma.student.update({ where: { id: parseInt(id) }, data });
};

export const deleteStudent = async (id) => {
  const studentId = parseInt(id);
  if (isNaN(studentId)) {
    throw new Error("Invalid student ID: Student Id must be a number");
  }
  return await prisma.student.delete({ where: { id: parseInt(id) } });
};
