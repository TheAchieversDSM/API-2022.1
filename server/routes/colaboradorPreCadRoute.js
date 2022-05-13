const express = require('express');
const colaboradorController = require("../controllers/colaboradorPreCadController");
const pessoaFisicaController = require("../controllers/pessoaFisicaController")
const router = require("express").Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/")
    },
    filename: function (req,file,cb){
        cb(null,file.originalname)
        console.log(file.originalname);

    }
})

const upload = multer({storage})

router.post('/insertArquivos/:id',upload.fields([
// DOCUMENTOS PESSOAIS
    {name:"rg",maxCount:2},
    {name:"carteiraTrabalho",maxCount:2},
    {name:"cpfFile",maxCount:2},
    {name:"cnh",maxCount:2},
    {name:"foto",maxCount:2},
    {name:"tituloEleitor",maxCount:2},
    {name:"comprovanteResidencia",maxCount:2},
    {name:"comprovanteEscolaridade",maxCount:2},

// DOCUMENTOS PROFISSIONAIS
    {name:"ensinoFundamental",maxCount:2},
    {name:"ensinoMedio",maxCount:2},
    {name:"ensinoSuperior",maxCount:2},
    {name:"contribuicaoSindical",maxCount:2},
    {name:"termoPi",maxCount:2},
    {name:"cartaoPis",maxCount:2},
    {name:"certificadoReservista",maxCount:2},
    {name:"atestadoOcupacional",maxCount:2},

// DOCUMENTOS DO CÔNJUGE SE CASADO
    {name:"certidaoCasamento",maxCount:2},
    {name:"rgConjuge",maxCount:2},
    {name:"cpfConjuge",maxCount:2},

// DOCUMENTOS DOS FILHOS SE FOR PAI/MÃE    
    {name:"cerNasc",maxCount:2},
    {name:"cerVaci",maxCount:2},
    {name:"comprovanteEscolarFilho",maxCount:2},
// DOCUMENTO SE FORNECER PENSAO
    {name:"pensaoAlimenticia",maxCount:2}
]),colaboradorController.insertDocuments)

router.put('/updatecolaborador/:id', colaboradorController.updateUser)

router.post('/insertpessoafisica', pessoaFisicaController.createPessoaFisica)

module.exports = router