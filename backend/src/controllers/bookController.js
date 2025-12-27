import * as bookService from "../services/bookService.js";
import { validateBook } from "../utils/validation.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createBook = async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).message("Book created successfully").json(book);
  } catch {
    res.status(500).json({ error: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBook = async (req, res) => {
  const bookid = req.params.id;
  if (!bookid || isNaN(bookid)) {
    return res
      .status(400)
      .json({ error: "Book ID is required and book Id should be a number" });
  }
  try {
    await bookService.deleteBook(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
