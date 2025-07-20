const express = require("express");
const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Response sent from HTTP Server!",
  });
});

app.post("/", (req, res) => {
  const name = req.body.name || "Guest";
  res.status(200).json({
    status: true,
    message: "Hello, " + name + "! Your POST request was successful.",
  });
});

app.get("/",(req,res) => {
  res.status(200).json({
    status: true,
    message: "GET request received!"
  });
});

app.listen(PORT, () => {
  console.log(`HTTP Server is running on: http://localhost:${PORT}`);
});
