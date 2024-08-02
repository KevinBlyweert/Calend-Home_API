const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js');

router.get('/', (_, res) => {
    res.status(200).json({ message: 'Here is the auth route.' })
})
router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);

module.exports = router;