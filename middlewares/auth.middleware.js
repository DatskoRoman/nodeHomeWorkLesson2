const User = require('../dataBase/User');

module.exports = {
  userAuthMiddleware: async (req, res, next) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email, password});

      if (!user) {
        throw new Error('Wrong email or password');
      }

      req.user = user;

      next();
    } catch (e) {
      res.json(e.message);
    }
  },

  checkIn: (req, res, next) => {
    try {
      const {auth} = req.user;

      if (auth) {
        throw new Error('You are logged');
      }

      next();
    } catch (e) {
      res.json(e.message);
    }
  }
};
