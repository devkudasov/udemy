const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race', (raceResult) => {
  if (raceResult === 'win') console.log('Congratulation! You are the best!');
  else console.log('Boo I could have better than that!');
});

process.on('exit', (code) => {
  console.log(`Process exit event with code: ${code}`);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lose');
celebrity.emit('race',  'win');