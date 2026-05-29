const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/health", (req, res) => {
  res.json({ status: "NeuraX AI backend running 🚀" });
});

// simple AI test route (fake for now)
app.post("/chat", (req, res) => {
  const message = req.body.message;

  res.json({
    reply: "You said: " + message
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
