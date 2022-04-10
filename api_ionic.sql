-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema api_ionic
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `api_ionic`;
USE `api_ionic` ;

-- -----------------------------------------------------
-- Table `api_ionic`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`departamento` (
  `dep_id` INT NOT NULL AUTO_INCREMENT,
  `dep_head` VARCHAR(40) NOT NULL,
  `dep_base` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`dep_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`nivel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`nivel` (
  `niv_id` INT NOT NULL AUTO_INCREMENT,
  `niv_acesso` INT NOT NULL,
  `niv_descricao` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`niv_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `api_ionic`.`cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`cargo` (
  `car_id` INT NOT NULL AUTO_INCREMENT,
  `car_vale_transporte` FLOAT NOT NULL,
  `car_vale_refeicao` FLOAT NOT NULL,
  `car_auxilio_creche` FLOAT NOT NULL,
  `car_nivel_acesso` INT NOT NULL,
  `car_plano_saude` VARCHAR(40) NOT NULL,
  `car_descricao` VARCHAR(40) NOT NULL,
  `car_salario` FLOAT NOT NULL,
  `nivel_niv_id` INT NOT NULL,
  `departamento_dep_id` INT NOT NULL,
  PRIMARY KEY (`car_id`),
  INDEX `cargo_departamento` (`departamento_dep_id` ASC) VISIBLE,
  INDEX `cargo_nivel` (`nivel_niv_id` ASC) VISIBLE,
  CONSTRAINT `cargo_departamento`
    FOREIGN KEY (`departamento_dep_id`)
    REFERENCES `api_ionic`.`departamento` (`dep_id`),
  CONSTRAINT `cargo_nivel`
    FOREIGN KEY (`nivel_niv_id`)
    REFERENCES `api_ionic`.`nivel` (`niv_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`tipo_contratacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`tipo_contratacao` (
  `cont_id` INT NOT NULL AUTO_INCREMENT,
  `cont_descricao` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`cont_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`perfil-temp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`perfil_temp` (
	`pt_email` VARCHAR(100) NOT NULL,
    `pt_senha` VARCHAR(8) NOT NULL,
	PRIMARY KEY (pt_email))
    ENGINE = InnoDB;
    

-- -----------------------------------------------------
-- Table `api_ionic`.`colaborador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`colaborador` (
  `con_id` INT NOT NULL AUTO_INCREMENT,
  `con_email` VARCHAR(100) NOT NULL,
  `con_senha` VARCHAR(8) NOT NULL,
  `con_nome` VARCHAR(100) NOT NULL,
  `con_telefone` INT NOT NULL,
  `con_endereco` VARCHAR(100) NOT NULL,
  `end_rua` VARCHAR(100) NOT NULL,
  `end_numero` INT NOT NULL,
  `end_bairro` VARCHAR(100) NOT NULL,
  `end_cep` INT NOT NULL,
  `end_estado` VARCHAR(100) NOT NULL,
  `end_complemento` VARCHAR(100) NOT NULL,
  `end_regiao` VARCHAR(100) NULL,
  `tipo_contratacao_cont_id` INT NOT NULL,
  `cargo_car_id` INT NOT NULL,
  `departamento_dep_id` INT NOT NULL,
  `tipo_pessoa` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`con_id`),
  INDEX `contratado_cargo` (`cargo_car_id` ASC) VISIBLE,
  INDEX `contratado_departamento` (`departamento_dep_id` ASC) VISIBLE,
  INDEX `contratado_tipo_contratacao` (`tipo_contratacao_cont_id` ASC) VISIBLE,
  CONSTRAINT `contratado_cargo`
    FOREIGN KEY (`cargo_car_id`)
    REFERENCES `api_ionic`.`cargo` (`car_id`),
  CONSTRAINT `contratado_departamento`
    FOREIGN KEY (`departamento_dep_id`)
    REFERENCES `api_ionic`.`departamento` (`dep_id`),
  CONSTRAINT `contratado_tipo_contratacao`
    FOREIGN KEY (`tipo_contratacao_cont_id`)
    REFERENCES `api_ionic`.`tipo_contratacao` (`cont_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`documentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`documentos` (
  `doc_id` INT NOT NULL AUTO_INCREMENT,
  `doc_link` VARCHAR(40) NOT NULL,
  `doc_tipo` VARCHAR(40) NOT NULL,
  `contratado_con_id` INT NOT NULL,
  PRIMARY KEY (`doc_id`),
  INDEX `documentos_contratado` (`contratado_con_id` ASC) VISIBLE,
  CONSTRAINT `documentos_contratado`
    FOREIGN KEY (`contratado_con_id`)
    REFERENCES `api_ionic`.`colaborador` (`con_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`historico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`historico` (
  `his_id` INT NOT NULL AUTO_INCREMENT,
  `his_data_desligamento` DATE NOT NULL,
  `his_data_admissao` DATE NOT NULL,
  `his_cargo` VARCHAR(400) NOT NULL,
  `his_salario` FLOAT NOT NULL,
  `his_pesquisa_desligamento` VARCHAR(400) NOT NULL,
  `his_desligamento_descricao` VARCHAR(100) NOT NULL,
  `his_distrato` VARCHAR(100) NOT NULL,
  `colaborador_con_id` INT NOT NULL,
  PRIMARY KEY (`his_id`),
  INDEX `historico_colaborador` (`colaborador_con_id` ASC) VISIBLE,
  CONSTRAINT `historico_colaborador`
    FOREIGN KEY (`colaborador_con_id`)
    REFERENCES `api_ionic`.`colaborador` (`con_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`trilha_aprendizagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`trilha_aprendizagem` (
  `tri_id` INT NOT NULL AUTO_INCREMENT,
  `tri_status` VARCHAR(40) NOT NULL,
  `tri_curso` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`tri_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`pessoa_fisica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`pessoa_fisica` (
  `user_cpf` INT NOT NULL,
  `user_data_nascimento` DATE NOT NULL,
  `user_raca` VARCHAR(40) NOT NULL,
  `user_naturalidade` VARCHAR(40) NOT NULL,
  `user_genero` VARCHAR(40) NOT NULL,
  `user_nacionalidade` VARCHAR(40) NOT NULL,
  `user_estado_civil` VARCHAR(40) NOT NULL,
  `colaborador_con_id` INT NOT NULL,
  PRIMARY KEY (`colaborador_con_id`),
  CONSTRAINT `pessoa_fisica_contratado`
    FOREIGN KEY (`colaborador_con_id`)
    REFERENCES `api_ionic`.`colaborador` (`con_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`item_aprendizado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`item_aprendizado` (
  `data_inicio_trilha` DATE NOT NULL,
  `data_termino_trilha` DATE NOT NULL,
  `colaborador_con_id` INT NOT NULL,
  `trilha_apr_tri_id` INT NOT NULL,
  PRIMARY KEY (`trilha_apr_tri_id`, `colaborador_con_id`),
  INDEX `item_aprendizado_pessoa_fisica` (`colaborador_con_id` ASC) VISIBLE,
  CONSTRAINT `item_apr_trilha_apr`
    FOREIGN KEY (`trilha_apr_tri_id`)
    REFERENCES `api_ionic`.`trilha_aprendizagem` (`tri_id`),
  CONSTRAINT `item_aprendizado_pessoa_fisica`
    FOREIGN KEY (`colaborador_con_id`)
    REFERENCES `api_ionic`.`pessoa_fisica` (`colaborador_con_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`pessoa_juridica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`pessoa_juridica` (
  `emp_tempo_formalizacao` FLOAT NOT NULL,
  `emp_natureza_juridica` VARCHAR(40) NOT NULL,
  `data_fundacao` DATE NOT NULL,
  `emp_nome` VARCHAR(40) NOT NULL,
  `emp_cnpj` INT NOT NULL,
  `colaborador_con_id` INT NOT NULL,
  PRIMARY KEY (`colaborador_con_id`),
  CONSTRAINT `pessoa_juridica_contratado`
    FOREIGN KEY (`colaborador_con_id`)
    REFERENCES `api_ionic`.`colaborador` (`con_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`qualificacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`qualificacao` (
  `qua_id` INT NOT NULL AUTO_INCREMENT,
  `qua_formacao` VARCHAR(40) NOT NULL,
  `qua_curso` VARCHAR(40) NOT NULL,
  `qua_lingua` VARCHAR(40) NOT NULL,
  `colaborador_con_id` INT NOT NULL,
  PRIMARY KEY (`qua_id`),
  INDEX `qualificacao_pessoa_fisica` (`colaborador_con_id` ASC) VISIBLE,
  CONSTRAINT `qualificacao_pessoa_fisica`
    FOREIGN KEY (`colaborador_con_id`)
    REFERENCES `api_ionic`.`pessoa_fisica` (`colaborador_con_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
