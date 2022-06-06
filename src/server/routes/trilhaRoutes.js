const express = require("express")
const trilhaController = require("../controllers/trilhaController")
const router = require("express").Router()

router.post("/createNewTrilha",trilhaController.createNewTrilha)
router.get("/getAllTrilha",trilhaController.getAllTrilha)
router.get("/getTrilhaByUserID/:id",trilhaController.getTrilhaByUserID)
router.get("/getAllUsersIdByCurso/:id",trilhaController.getAllUsersIdByCurso)
module.exports = router
