const express = require('express');
const adminController = require('../Controllers/adminController');
const router = express.Router();




    router.post('/signup', adminController.adminSignup);
    router.post('/login', adminController.adminLogin);
    module.exports = router;