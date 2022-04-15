const express = require('express');
const loginController = require("../controllers/loginController");
const router = require("express").Router()

router.get('/:con_email/:con_senha',loginController.getUserByEmail)

module.exports = router