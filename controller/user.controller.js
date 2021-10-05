const db = require('../dataBase/users')

module.exports = {
    getUsers: (req, res) => {
        res.json(db);
    },

    getUserById: (req, res) => {
        // console.log(')))))))))))');
        // console.log(req.params);
        // console.log(')))))))))))');
        const { user_id} = req.params;
        const user = db[user_id -1];

        res.json(user);
    },

    createUser:(req, res) => {
        console.log(req.body);

        db.push({...req.body, id: db.length + 1})
        res.json(db);
    },

    updateUser:(req, res) => {
        res.json('Update users');
    }
}