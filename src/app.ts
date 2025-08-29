import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("first route12345");
});

export default app;
