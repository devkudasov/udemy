const http = require('http');

const PORT = 3000;

const FRIENDS = [
  {
    id: 0,
    name: 'Nikola Tesla',
  },
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Albert Einstein',
  },
];

const server = http.createServer((req, res) => {
  const items = req.url.split('/');
  if (req.method === 'POST' && items[1] === 'friends') {
    const friend = {};
    req.on('data', (data) => {
      friend.id = FRIENDS.length;
      friend.name = JSON.parse(data.toString());
      
      FRIENDS.push(friend);
    });

    req.pipe(res);
    
  } else if (req.method === 'GET' && items[1] === 'friends') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    if (items[2]) {
      res.end(JSON.stringify(FRIENDS[items[2]]));
    } else {
      res.end(JSON.stringify(FRIENDS));
    }
  } else if (req.method === 'GET' && items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Issac!</li>');
    res.write('<li>What are your thoughts on astronomy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
