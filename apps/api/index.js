app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({ reply: "No message received" });
  }

  try {
    const reply = await aiRouter(message);

    res.json({
      id: Date.now(),
      role: "assistant",
      reply
    });

  } catch (err) {
    res.json({
      reply: "Error generating response",
      error: err.message
    });
  }
});
