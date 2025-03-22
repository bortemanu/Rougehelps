const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://chatgpt.com/g/g-67d963e5d72881918acb3ba104565b1f-rouge-helps");
        let modifiedHTML = response.data.replace(/ChatGPT/g, "My AI Bot");
        res.send(modifiedHTML);
    } catch (error) {
        res.status(500).send("Error fetching chatbot");
    }
});

app.listen(8080, () => console.log("Proxy server running on port 8080"));
