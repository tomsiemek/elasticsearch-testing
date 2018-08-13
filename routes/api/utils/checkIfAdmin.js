const User = require('../../../models/User');

function checkIfAdmin(login, callback) {
    User.findOne({ login })
    .then(user => {
        if (user.role === 'admin') {
            callback();
        }
        else {
            res.json(
                {
                    msg: "You do not have permission!"
                }
            )
        }
    })
    .catch(err => console.log(err));
}

module.exports = checkIfAdmin;