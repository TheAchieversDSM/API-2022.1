const express = require('express');
const loginController = require("../controllers/loginController");
const router = require("express").Router()

router.get('/:col_email/:col_senha',loginController.getUserByEmail)

module.exports = router