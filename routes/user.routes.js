const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')

// POST /api/users
router.post('/', userCtrl.create);
//http://localhost:3000/api/users/

// POST /api/users/signin
router.post('/sign-in', userCtrl.signIn);
//http://localhost:3000/api/users/sign-in

module.exports = router;