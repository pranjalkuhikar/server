import app from "./src/app.ts";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
