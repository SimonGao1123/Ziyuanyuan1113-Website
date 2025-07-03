const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from JavaScript backend!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
}); 
// simple placeholder for the backend code
// RUN WITH: node index.js