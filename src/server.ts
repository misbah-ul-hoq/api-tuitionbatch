import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ message: "Hello from tuition-batch api!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
