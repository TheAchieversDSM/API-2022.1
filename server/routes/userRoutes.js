const express = require('express');
const userController = require('../controllers/userController')
const router = require("express").Router()

router.get('/getAll',userController.getAllUser)
router.get('/getAllByDep/:dep_id',userController.getAllUserByDep)
router.get('/:id',userController.getUserById)

module.exports = router