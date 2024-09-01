import React, { useEffect, useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Tabular Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.occupation}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
