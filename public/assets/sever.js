const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path')



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);



app.get('/api/notes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to retrieve upvote count`);

  // Log our request to the terminal
  console.info(`${req.method} request received to retrieve upvote count`);
});


// POST request for reviews
app.post('/api/notes', (req, res) => {
  // Inform the client that their POST request was received
  res.json(`${req.method} request received to add a review`);

  // Log our request to the terminal
  console.info(`${req.method} request received to add a review`);
});
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);