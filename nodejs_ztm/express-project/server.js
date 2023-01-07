const express = require('express');

const app = express();

const PORT = 3000;

const FRIENDS = [
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Albert Einstein',
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }

  const friend = {
    id: FRIENDS.length + 1,
    name: req.body.name,
  };
  FRIENDS.push(friend);

  res.json(friend);
});

app.get('/friends', (req, res) => {
  res.json(FRIENDS);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = +req.params.friendId;
  const friend = FRIENDS.find((friend) => friend.id === friendId);

  if (friend) res.json(friend);
  else
    res.status(404).json({
      error: 'Friend does not exist',
    });
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Helloo Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
