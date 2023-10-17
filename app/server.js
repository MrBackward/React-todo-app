const express = require("express");
const OpenAi = require("openai");
const cors = require("cors");

const app = express();
const port = 3001;

const openAi = new OpenAi({
  apiKey: "",
});

app.use(express.json());
app.use(cors());

app.post("/aiCreateDescription", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ text: response.choices[0].message });
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
