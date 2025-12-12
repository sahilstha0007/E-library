import prisma from "../config/db.js";

export const getAllStudents = async () => prisma.student.findMany();
export const createStudent = async (id) => prisma.student.create({ data });
export const updateStudent = async (id, data) =>
  prisma.student.update({ where: { id: praseInt(id) }, data });
export const deleteStudent = async (id) =>
  prisma.student.delete({
    where: { id: parseInt(id) },
  });
