const model = require('../models/friends.model');

function getFriendList(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = model.find((friend) => friend.id === friendId);

  if (friend) res.json(friend);
  else
    res.status(404).json({
      error: 'Friend does not exist',
    });
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }

  const friend = {
    id: model.length + 1,
    name: req.body.name,
  };
  model.push(friend);

  res.json(friend);
}

module.exports = {
  getFriendList,
  getFriend,
  postFriend,
};
