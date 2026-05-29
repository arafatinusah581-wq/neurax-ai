const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
====================================
NeuraX AI - REAL AI ENGINE (READY)
====================================
*/

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "NeuraX AI Ready 🚀" });
});

/*
====================================
AI CHAT ENDPOINT (OPENAI READY)
====================================
*/
app.post("/chat", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.json({ reply: "No message received" });
  }

  try {
    const reply = await generateAIResponse(message);

    res.json({
      reply,
      model: "neuraX-ai-v1"
    });

  } catch (err) {
    res.json({
      reply: "AI error occurred",
      error: err.message
    });
  }
});

/*
====================================
AI ROUTER (READY FOR OPENAI/CLAUDE)
====================================
*/
async function generateAIResponse(message) {
  const text = message.toLowerCase();

  // SMART ROUTING LOGIC (Phase 2 AI brain)
  if (text.includes("code") || text.includes("build")) {
    return engineeringMode(message);
  }

  if (text.includes("explain") || text.includes("research")) {
    return researchMode(message);
  }

  return normalMode(message);
}

/*
====================================
AI MODES (TEMP LOGIC - WILL BE REAL AI LATER)
====================================
*/

// Normal chat mode
function normalMode(input) {
  return "NeuraX AI says: " + input;
}

// Engineering mode (system design)
function engineeringMode(input) {
  return "Engineering Mode: I will help you design systems for: " + input;
}

// Research mode (deep thinking)
function researchMode(input) {
  return "Research Mode: analyzing topic - " + input;
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("NeuraX AI running on port " + PORT);
});
