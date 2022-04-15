const express = require('express');
const notificacaoController = require("../controllers/notificacaoController");
const router = require("express").Router()

router.get("/:id",notificacaoController.createNotifi)


module.exports = router