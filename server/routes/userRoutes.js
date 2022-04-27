const express = require('express');
const userController = require('../controllers/userController')
const router = require("express").Router()

router.get('/:id',userController.getUserById)
router.get('/getAll',userController.getAllUser)

module.exports = router