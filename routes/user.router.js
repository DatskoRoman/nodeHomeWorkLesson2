const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const authController = require('../controller/auth.controller');

router.get('/', userController.getUsers);

router.get('/:user_id', userController.getUserById);

router.post('/', userMiddleware.createUserMiddleware,userMiddleware.findUserMiddleware, userController.createUser );
router.post('/', authMiddleware.userAuthMiddleware, authMiddleware.checkIn);
router.post('/', authController.login);

module.exports = router;
