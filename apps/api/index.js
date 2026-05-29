const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
========================
NeuraX AI CHAT ENGINE
========================
*/

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "NeuraX AI running 🚀" });
});

// AI chat endpoint (REAL structure)
app.post("/chat", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.json({ reply: "No message received" });
  }

  // TEMP AI LOGIC (we will replace with OpenAI later)
  const reply = generateResponse(message);

  res.json({
    reply,
    mode: "neuraX-basic"
  });
});

/*
========================
Simple AI brain (temporary)
========================
*/
function generateResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("hello")) {
    return "Hello 👋 I am NeuraX AI";
  }

  if (text.includes("build")) {
    return "I can help you build systems and apps.";
  }

  if (text.includes("who are you")) {
    return "I am NeuraX AI, your assistant.";
  }

  return "I understand: " + input;
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("NeuraX AI server running on port " + PORT);
});
