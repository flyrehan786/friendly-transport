const express = require('express');
const router = express.Router();

const usersRoutes = require('../routes/users');
const authRoute = require('../routes/auth');

router.use('/api/auth', authRoute);
router.use('/api/users', usersRoutes);

module.exports = router;
