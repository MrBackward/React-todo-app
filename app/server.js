const express = require("express");
const openAi = require("openai");

const app = express();
const port = 3001;

openAi.apiKey = "sk-2w7JZEYhkuWuMSh0AbTzT3BlbkFJnGNzwKaDGvLjfjYHaKMHser";

app.use(express.json());

app.post("/aiCreateDescription", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openAi.CreateCompletion({
      engine: "text-davinci-002",
      prompt: prompt,
      maxTokens: 64,
      temperature: 0.35,
      n: 1,
      stop: 4,
    });

    res.json({ text: response.choices[0].text });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
