const express = require('express');
const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriendList);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;