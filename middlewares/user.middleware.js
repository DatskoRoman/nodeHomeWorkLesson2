const User = require('../dataBase/User');

module.exports = {
  createUserMiddleware: async (req, res, next) => {
    try {

      const userByEmail = await User.findOne({email:req.body.email});

      if (userByEmail) {
        throw new Error('Email already exist');
      }

      next();
    }catch (e) {
      res.json(e.message);
    }
  },

  findUserMiddleware: async (req, res, next) => {
    try {
      const {user_id} = req.params;
      const user = await User.findById(user_id);
      if (!user) {
        throw new Error('Not found user');
      }

      next();
    } catch (e) {
      res.json(e.message);
    }
  }
};
