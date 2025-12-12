import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("E-Library API Running"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});