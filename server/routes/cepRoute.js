const express = require("express")
const cepController = require("../controllers/cepController")
const router = require("express").Router()

router.get("/:cep",cepController.consultaCep)

module.exports = router