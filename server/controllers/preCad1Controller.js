const db = require("../config/dbconfig")

User = function (user) {
    this.con_nome = user.nome,
    this.user_cpf = user.cpf, // pessoa_fisica
    this.user_nacionalidade = user.nacionalidade, // pessoa_fisica
    this.user_naturalidade = user.naturalidade, // pessoa_fisica
    this.user_raca = user.raca, // pessoa_fisica
    this.user_genero = user.genero, // pessoa_fisica
    this.user_data_nascimento = user.data, // pessoa_fisica
    this.con_ddd = user.ddd,
    this.con_telefone = user.telefone,
    this.con_endereco = user.endereco,
    this.end_bairro = user.bairro,
    this.end_complemento = user.complemento,
    this.end_cep = user.cep,
    this.end_estado = user.estado,
    this.end_regiao = user.regiao,
    this.user_estado_civil = user.estadoCivil, // pessoa_fisica
    this.user_filho = user.filho, // pessoa_fisica
    this.tipo_pessoa = user.tipoContratacao
}