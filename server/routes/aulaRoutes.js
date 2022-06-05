const express = require('express');
const aulaController = require("../controllers/aulaController");
const router = require("express").Router();

router.post('/newAula', aulaController.createNewAula)
router.get('/getAulaIdByName/:aula_nome',aulaController.getAulaIdByName)

module.exports = router