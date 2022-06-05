const express = require('express');
const aulaController = require("../controllers/aulaController");
const router = require("express").Router();

router.post('/newAula', aulaController.createNewAula)
router.post('/getAulaIdByName/:name', aulaController.getAulaIdByName)

module.exports = router