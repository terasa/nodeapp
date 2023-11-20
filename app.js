// Include the express module
const express = require('express');

// Create a new express application
const app = express();

// The port that the application will listen on
const port = 1234;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Start the application, listening on a specific port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
