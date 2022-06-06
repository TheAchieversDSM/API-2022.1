const express = require('express');
const aulaAndamentoController = require("../controllers/aulaAndamentoController")
const router = require('express').Router()

router.post("/createProgresso", aulaAndamentoController.createProgresso)
router.get("/getProgressoByUserId", aulaAndamentoController.getProgressoByUserId)

module.exports = router