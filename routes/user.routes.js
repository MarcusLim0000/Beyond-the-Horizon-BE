const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')

// POST /api/users
router.post('/', userCtrl.create);
//http://localhost:3005/api/users/

// POST /api/users/signin
router.post('/sign-in', userCtrl.signIn);
//http://localhost:3005/api/users/sign-in

//router.get('/listings/:id', userCtrl.getUserHolidays);
//http://localhost:3005/api/users/listings/id

module.exports = router;