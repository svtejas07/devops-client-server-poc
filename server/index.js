const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Sample tabular data
const tableData = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Doctor' },
    { id: 3, name: 'Mike Johnson', age: 45, occupation: 'Teacher' }
];

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, World! This is the server responding.');
});

// Endpoint to fetch the tabular data
app.get('/data', (req, res) => {
  res.json(tableData);
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

