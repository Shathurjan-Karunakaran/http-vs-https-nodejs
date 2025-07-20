const express = require("express");
const https = require("https");
const selfSignedCert = require("selfsigned");
const app = express();
app.use(express.json());

const fs = require("fs");

const attributes = [{ name: "commonName", value: "localhost" }];
const ssl = selfSignedCert.generate(attributes, { days: 365 });

fs.writeFileSync("ssl.key", ssl.private);
fs.writeFileSync("ssl.cert", ssl.cert);

const PORT = 4000;

const server = https.createServer({
    key: ssl.private,
    cert: ssl.cert
}, app);

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

server.listen(PORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${PORT}`);
});

