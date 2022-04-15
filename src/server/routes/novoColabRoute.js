const express = require('express');
const userController = require("../controllers/novoColabController");
const router = require("express").Router()

router.post('/create',userController.createUser),
 
module.exports = router