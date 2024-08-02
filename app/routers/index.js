const express = require('express');
const router = express.Router();
const userRoutes = require('./user.js');
const planningRoutes = require('./plannings.js');
const auth = require('../middlewares/auth.js')

router.use('/plannings', planningRoutes);
router.use('/user', userRoutes);
router.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Calend'Home!" })
})

module.exports = router;