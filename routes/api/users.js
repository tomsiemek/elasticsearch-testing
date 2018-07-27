const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const UserObject = require('../../models/UserObject');
const JsonWebToken = require('jsonwebtoken');
const expressJsonValidate = require('express-jwt');

const secretKey = 'okon';

const JsonWebTokenMiddleware = expressJsonValidate({secret: secretKey});

function encryptPassword(password, salt) {
    return password;
}

function createSalt () {
    return Math.random * 100;
}
//create new user
router.post('/',(req,res) => {
    console.log("POST REQUEST NEW USER " + new Date().toLocaleString());
    console.log(req.body);
    
    const newItem = new User( new UserObject(req.body.login, encryptPassword(req.body.password), ) );

    newItem.save().then(item => res.json(item)); 
});

function responseObject(isOk, token_ = null) {
    return {
        success: isOk,
        token: token_
    };
}
// get all users
router.get('/', (req,res) => {
    console.log("GET REQUEST USERS " + new Date().toLocaleString());
    User.find()
        .sort({ login: 1})
        .then(users => res.json(users));
});
//delete user
router.delete('/id/:id', (req,res) => {
    User.findByIdAndRemove(req.params.id)
        .then( () => res.json(responseObject(true)))
        .catch(() => res.status(404).json(responseObject(false)));
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
           if(user.password === encryptPassword(req.body.password)){
               let token = JsonWebToken.sign(req.body,secretKey,expireTime )
               res.json(responseObject(true, token));
           } 
           else {
               res.status(401).json(responseObject(false));
           }
       }).catch(err => res.json(noUserFoundMessage(req.body.login)));
});
//validate token
router.get('/validate',JsonWebTokenMiddleware,(req,res) => {
    console.log("Token validated")
    res.json({success: true});
})

module.exports = router;