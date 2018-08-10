const express = require('express');
const router = express.Router();
const files = require('fs');
const secretKey = require('../../config/keys').secretKey;
const checkIfAdmin = require('./utils/checkIfAdmin');
const JsonWebToken = require('jsonwebtoken');
const expressJsonValidate = require('express-jwt');
const JsonWebTokenMiddleware = expressJsonValidate({ secret: secretKey });


const setLogRequest = (filename) => {
    router.get(`/${filename}`, JsonWebTokenMiddleware, (req, res) => {
        const token = req.get('Authorization').split(' ')[1]
        const decoded = JsonWebToken.decode(token);

        checkIfAdmin(decoded.login, () => {
            try {
                files.readFile(`logs/${filename}.log`, 'utf8', (error,data) => res.json(data));
            }
            catch (error) {
                res.json({ success: false, message: error.message });
            }

        })
    })
}


setLogRequest('error');
setLogRequest('combined');

module.exports = router;