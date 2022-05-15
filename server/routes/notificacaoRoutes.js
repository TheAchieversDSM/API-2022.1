const express = require('express');
const notificacaoController = require("../controllers/notificacaoController");
const router = require("express").Router()


router.get("/getAll",notificacaoController.getAll)
router.delete("/deleteNotificacao/:id",notificacaoController.deleteNotificacao)
//router.get("/:id",notificacaoController.createNotifi)


module.exports = router