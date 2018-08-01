// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = 3000;

let myLogger = (req, res, next) => {
  console.log('logging...');
  next();
};

let requestTime = (req, res, next) => {
  req.timeOfRequest = Date.now();
  next();
};

// Define which directory we will serve files from
app.use(express.static('./public'));
app.use(myLogger);
app.use(requestTime);

// Define routes here
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.get('/bats', (req, res) => {
  console.log(req.timeOfRequest);
  res.sendFile('bat-country.html', {root: './public'});
});

app.get('*', (req, res) => {
  res.status(404).sendFile('404.html', {root: './public'});
});

// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`Server running and listening on port ${PORT}`));