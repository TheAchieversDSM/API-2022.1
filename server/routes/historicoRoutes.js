const express = require('express');
const historicoController = require("../controllers/historicoController");
const router = require("express").Router();

router.post('/admissao',historicoController.createNewHistorico);

module.exports = router;