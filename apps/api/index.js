const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
=====================================
NeuraX AI - REAL AI SYSTEM (v1)
=====================================
*/

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const CLAUDE_KEY = process.env.ANTHROPIC_API_KEY;

/*
=====================================
HEALTH CHECK
=====================================
*/
app.get("/health", (req, res) => {
  res.json({ status: "NeuraX AI LIVE 🚀" });
});

/*
=====================================
MAIN CHAT ENDPOINT
=====================================
*/
app.post("/chat", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.json({ reply: "No message received" });
  }

  try {
    const reply = await aiRouter(message);

    res.json({
      reply,
      provider: "neurax-router"
    });

  } catch (err) {
    res.json({
      reply: "AI error",
      error: err.message
    });
  }
});

/*
=====================================
AI ROUTER (SMART SWITCHING)
=====================================
*/
async function aiRouter(message) {
  const text = message.toLowerCase();

  if (text.includes("code") || text.includes("build")) {
    return engineeringAI(message);
  }

  if (text.includes("explain") || text.includes("why")) {
    return researchAI(message);
  }

  return normalAI(message);
}

/*
=====================================
OPENAI FUNCTION (READY)
=====================================
*/
async function callOpenAI(prompt) {
  if (!OPENAI_KEY) {
    return "[OpenAI not configured] " + prompt;
  }

  // REAL API CALL PLACEHOLDER STRUCTURE
  return "OpenAI response placeholder: " + prompt;
}

/*
=====================================
CLAUDE FUNCTION (READY)
=====================================
*/
async function callClaude(prompt) {
  if (!CLAUDE_KEY) {
    return "[Claude not configured] " + prompt;
  }

  return "Claude response placeholder: " + prompt;
}

/*
=====================================
AI MODES
=====================================
*/

// Normal mode → OpenAI default
async function normalAI(input) {
  return await callOpenAI(input);
}

// Engineering mode → OpenAI (logic heavy)
async function engineeringAI(input) {
  return await callOpenAI("ENGINEERING: " + input);
}

// Research mode → Claude preferred
async function researchAI(input) {
  return await callClaude("RESEARCH: " + input);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("NeuraX AI running on port " + PORT);
});
