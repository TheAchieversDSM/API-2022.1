const express = require('express');
const userController = require("../controllers/userController");
const router = require("express").Router()


router.post('/',userController.createUser),

router.get('/findemail/:con_email/:con_senha',userController.getUserByEmail),

 
module.exports = router