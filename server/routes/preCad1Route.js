const express = require('express');
const precad1Controller = require("../controllers/preCad1Controller");
const router = require("express").Router()

router.post('/', precad1Controller.updateUser)

 
module.exports = router