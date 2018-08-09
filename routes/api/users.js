const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const UserObject = require('../../models/UserObject');
const JsonWebToken = require('jsonwebtoken');
const expressJsonValidate = require('express-jwt');

const secretKey = require('../../config/keys').secretKey;

const JsonWebTokenMiddleware = expressJsonValidate({secret: secretKey});
const crypto = require('crypto');
;
function encryptPassword(password, salt) {
    console.log(salt);

    const numberOfIterations = 100000;
    const keylen = 64;
    const digest = 'sha512'
    let key = crypto.pbkdf2Sync(password, salt, numberOfIterations, keylen, digest);
    return key.toString('hex');
}

function createSalt () {
    let salt = crypto.randomBytes(16).toString('hex');
    console.log('salt: ' + salt);
    return salt;
}

// change password
router.put('/:username', (req,res) => {
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let username = req.params.username;
    console.log(`CHANGE PASS FOR: ${username}`);

    User.findOne({login: username})
        .then(user => {
            let encryptedPassword = encryptPassword(oldPassword, user.salt);

            if(user.password === encryptedPassword) {
                user.password = encryptPassword(newPassword, user.salt);
                user.save().then( (status) => res.json(status) );
            }
            else {
                res.json({
                    msg: 'WRONG PASSWORD'
                })
            }

        })
        .catch(err => res.json(err));

    


})

// upgrading role
router.put('/upgrade/:username', (req, res) => {
    let username = req.params.username;
    console.log(`CHANGE ROLE FOR: ${username}`);
    User.findOne({ login: username })
        .then(user => {
            user.role = 'admin';
            user.save().then((status) => res.json(status));
        })
        .catch (err => res.json(err));

});

// degrade role
router.put('/degrade/:username', (req, res) => {
    let username = req.params.username;
    console.log(`CHANGE ROLE FOR: ${username}`);
    User.findOne({ login: username })
        .then(user => {
            user.role = 'user';
            user.save().then((status) => res.json(status));
        })
        .catch (err => res.json(err));

});

//create new user
router.post('/', (req, res) => {
    console.log("POST REQUEST NEW USER " + new Date().toLocaleString());
    console.log(req.body);

    User.findOne({ login: req.body.login })
        .then((user) =>  {
            if (user === null) {
                let salt = createSalt();
                const newItem = new User(new UserObject(req.body.login, encryptPassword(req.body.password, salt), salt));

                newItem.save().then(item => res.json(item));
            }
            else {
                res.json({
                    message: 'username already taken'
                })
            }
        });


});




// creating first admin user
// router.post('/createDad', (req, res) => {
//     console.log("POST REQUEST NEW USER " + new Date().toLocaleString());
//     console.log(req.body.login);
//     try {
//         let salt = createSalt();
//         const newItem = new User(new UserObject(req.body.login, encryptPassword(req.body.password, salt), salt, 'admin'));

//         newItem.save().then(item => res.json(item));
//     }

//     catch(err){
//         res.json({
//             message: err.message
//         })
//     }


// });


function responseObject(isOk, token_ = null) {
    return {
        success: isOk,
        token: token_
    };
}

function checkIfAdmin(login, callback) {
    User.findOne({ login })
    .then(user => {
        if (user.role === 'admin') {
            callback();
        }
        else {
            res.json(
                {
                    msg: "You do not have permission to see this page"
                }
            )
        }
    })
    .catch(err => console.log(err));
}

// get all users
router.get('/', JsonWebTokenMiddleware, (req, res) => {
    console.log("GET REQUEST USERS " + new Date().toLocaleString());

    const token = req.get('Authorization').split(' ')[1]
    const decoded = JsonWebToken.decode(token);


    checkIfAdmin(decoded.login, () => {
            User.find()
                .sort({ login: 1 })
                .then(users => res.json(users));
    });
        

});
//delete user
router.delete('/username/:username', JsonWebTokenMiddleware, (req, res) => {

    const token = req.get('Authorization').split(' ')[1]
    const decoded = JsonWebToken.decode(token);


    checkIfAdmin(decoded.login, () => {
        User.remove({login: req.params.username})
            .then( () => res.json(responseObject(true)))
            .catch(() => res.status(404).json(responseObject(false)));
    });
});
//delete all users
router.delete('/all', (req,res) => {
    User.remove({})
        .then( () => res.json(responseObject(true)))
        .catch(() => res.status(404).json(responseObject(false)));
});

const expireTime = {
    expiresIn: '1h'
}

function noUserFoundMessage(user) {
    return {
        message: `user ${user} was not found!`
    }
}

//login try
router.post('/login', (req,res) => {
    console.log("Login try, username: " + req.body.login);
    User.findOne({login: req.body.login})
       .then(user => {
           if(user.password === encryptPassword(req.body.password,user.salt)){
               let token = JsonWebToken.sign(req.body,secretKey,expireTime )
               res.json(responseObject(true, token));
           } 
           else {
               res.json(responseObject(false));
           }
       }).catch(err => res.json(noUserFoundMessage(req.body.login)));
});
//validate token
router.get('/validate',JsonWebTokenMiddleware,(req,res) => {
    console.log("Token validated")
    res.json({success: true});
})

module.exports = router;