import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("first");
});

export default app;
