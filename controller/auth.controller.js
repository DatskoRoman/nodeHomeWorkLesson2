const User = require("../configs/user-roles.enum");
module.exports = {
  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User({email, password}, {auth: true});

      res.json(user);
    } catch (e) {
      res.json(e.message);
    }
  }
};
