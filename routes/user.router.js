const router = require('express').Router();

const userController = require('../controller/user.controller');

router.get('/', userController.getUsers);

router.get('/:user_id', userController.getUserById);

// router.get('/:user_id/:comment_id', userController.getUserById);

// router.get('/:user_id/:post.id', userController.getUsers);

router.post('/', userController.createUser );

router.put('/', userController.updateUser);

module.exports = router;