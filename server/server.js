const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON requests

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/api/prompt", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003", // or another model of your choice
      prompt: prompt,
      max_tokens: 150,
    });

    res.json({ response: completion.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: "Failed to get response from OpenAI API" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
