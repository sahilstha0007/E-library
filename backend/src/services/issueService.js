import prisma from "../config/db.js";

export const issueBook = async (studentId, bookId) => {
  return await prisma.$transaction(async (tx) => {
    const book = await tx.book.findUnique({ where: { id: bookId } });
    if (!book || book.quantity < 1) throw new Error("Book not available");

    await tx.book.update({
      where: { id: bookId },
      data: { quantity: book.quantity - 1 },
    });

    return await tx.issue.create({
      data: { studentId, bookId },
    });
  });
};

export const returnBook = async (issueId) => {
  return await prisma.$transaction(async (tx) => {
    const issue = await tx.issue.findUnique({ where: { id: issueId } });
    if (!issue || issue.isReturned) throw new Error("Invalid issue record");

    await tx.book.update({
      where: { id: issue.bookId },
      data: { qunatity: { increment: 1 } },
    });

    return await tx.issue.update({
      where: { id: issueId },
      data: { isReturned: true, returnDate: new Date() },
    });
  });
};

export const getAllIssues = async () => {
  return prisma.issue.findMany({
    include: {
      student: true,
      book: true,
    },
    orderBy: { issueDate: "desc" },
  });
};
