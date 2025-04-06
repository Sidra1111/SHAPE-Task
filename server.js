const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.json()); // To parse JSON request body

// Endpoint to save survey responses
app.post("/saveResponses", (req, res) => {
  const responses = req.body; // Get the responses from the request body

  const filePath = path.join(__dirname, "responses.json");

  // Read the current responses JSON (or initialize an empty array if not present)
  fs.readFile(filePath, "utf8", (err, data) => {
    let allResponses = [];
    if (err) {
      console.log("No previous data found. Creating new file...");
    } else {
      try {
        allResponses = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        return res.status(500).send("Error parsing previous data.");
      }
    }

    // Add new responses
    allResponses.push(responses);  // Push new responses

    // Save the updated responses back to the file
    fs.writeFile(filePath, JSON.stringify(allResponses, null, 2), (err) => {
      if (err) {
        console.error("Error saving responses:", err);
        return res.status(500).send("Error saving responses.");
      }

      console.log("Responses saved successfully.");
      res.status(200).json({ message: "Responses saved successfully!" });
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
