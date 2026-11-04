const express = require('express');
const app = express();

// This will only be visible in the terminal where you run the server, not in the browser
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

// This is a simple route that responds with a message when you visit http://localhost:3001
app.get('/', (req, res) => {
  res.send({ message: 'Hello from the server! The Developer Name is PHILIP!!!' });
});

