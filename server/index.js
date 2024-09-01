const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Sample tabular data
const tableData = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Doctor' },
    { id: 3, name: 'Mike Johnson', age: 45, occupation: 'Teacher' }
];

// Endpoint to fetch the data
app.get('/data', (req, res) => {
    res.json(tableData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
