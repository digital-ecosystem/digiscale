import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript 👋");
});

// Example POST route
app.post("/echo", (req: Request, res: Response) => {
  res.json({
    message: "You sent:",
    body: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
