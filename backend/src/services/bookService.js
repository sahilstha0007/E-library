import prisma from "../config/db.js";

export const getAllBooks = async () => prisma.book.findMany();
export const getBookById = async (id) => {
  const bookId = parseInt(id);
  if (isNaN(bookId)) {
    throw new Error("Invalid ID");
  }
  return await prisma.book.findUnique({
    where: { id: bookId },
  });
};
export const createBook = async (data) => prisma.book.create({ data });
export const updateBook = async (id, data) =>
  prisma.book.update({ where: { id: praseInt(id) }, data });
export const deleteBook = async (id) => {
  prisma.book.delete({ where: { id } });
};
