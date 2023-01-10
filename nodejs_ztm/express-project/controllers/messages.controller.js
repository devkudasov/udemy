const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages from my the best friend',
    name: 'Albert',
  });
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};
