const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Proxy endpoint
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://chatgpt.com/g/g-67d963e5d72881918acb3ba104565b1f-rouge-helps", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });

        let modifiedHTML = response.data.replace(/ChatGPT/g, "My AI Bot");

        res.send(modifiedHTML);
    } catch (error) {
        res.status(500).send("Error fetching chatbot");
    }
});

// Listen on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
