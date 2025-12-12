import * as issueService from "../services/issueService.js";

export const getAllIssues = async (req, res) => {
  try {
    const issues = await issueService.getAllIssues();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const issueBook = async (req, res) => {
  const { studentId, bookId } = req.body;
  try {
    const issue = await issueService.issueBook(
      parseInt(studentId),
      parseInt(bookId),
    );
    res.status(201).json(issue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const returnBook = async (req, res) => {
  const { issueId } = req.body;
  try {
    const result = await issueService.returnBook(parseInt(issueId));
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
