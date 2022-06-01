const express = require('express');
const historicoController = require("../controllers/historicoController");
const router = require("express").Router();

router.post('/admissao',historicoController.createNewHistorico);
router.post('/newHistoricoCargo',historicoController.newHistoricoCargo)
router.post('/desligamento/:id',historicoController.desligamento)

module.exports = router;