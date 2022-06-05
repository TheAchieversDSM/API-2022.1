const express = require('express');
const materialController = require("../controllers/materialController");
const router = require("express").Router();
const path = require("path")

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname + '_' + Date.now() + path.extname(file.originalname))
        console.log(file.originalname);
    }
})
const upload = multer({ storage })

router.post('/newMaterial', upload.single("file"), materialController.createNewMaterial)

module.exports = router