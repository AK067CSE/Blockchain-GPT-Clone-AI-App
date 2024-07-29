
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const API_KEY = "AIzaSyCPLQLC3VkrMPvd-z2nC4n3uV2MP5EZfds"; // Make sure you have your API key in the environment variables

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hi Daulat Hussain, Welcome To ChatGPT",
  });
});

app.post("/", async (req, res) => {
  const { prompt } = req.body;

  try {
    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=`+API_KEY   ;
    const messagesToSend = [
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messagesToSend,
      }),
    });

    const resJson = await response.json();

    if (response.ok) {
      const responseMessage = resJson.candidates[0].content.parts[0].text;

      res.status(200).send({
        message: responseMessage,
      });
    } else {
      res.status(response.status).send({
        error: resJson.error.message,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while processing your request.",
    });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
