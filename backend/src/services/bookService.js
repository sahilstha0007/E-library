import prisma from "../config/db.js";

export const getAllBooks = async () => prisma.book.findMany();
export const createBook = async (data) => prisma.book.create({ data });
export const updateBook = async (id, data) =>
  prisma.book.update({ where: { id: praseInt(id) }, data });
export const deleteBook = async (id) =>
  prisma.book.delete({ wnere: { id: praseInt(id) } });
