import "dotenv/config";
import cors from "cors";
import express from "express";
import notesRouter from "./routes/notes.routes";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in environment.");
}

const port = Number(process.env.PORT ?? "4000");

if (Number.isNaN(port)) {
  throw new Error("PORT must be a valid number.");
}

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/notes", notesRouter);

app.listen(port, () => {
  console.log(`SnapNote server running on port ${port}`);
});
