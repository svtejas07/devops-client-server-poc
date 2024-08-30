const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, World! This is the server responding.');
});

// Simple POST endpoint
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`Data received: ${JSON.stringify(receivedData)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
