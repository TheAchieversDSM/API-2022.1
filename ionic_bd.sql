-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema api_ionic
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `api_ionic` DEFAULT CHARACTER SET utf8 ;
USE `api_ionic` ;

-- -----------------------------------------------------
-- Table `api_ionic`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`departamento` (
  `dep_id` INT NOT NULL AUTO_INCREMENT,
  `dep_head` VARCHAR(40) NOT NULL,
  `dep_descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`dep_id`))
ENGINE = InnoDB
 ;


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
  `car_descricao` VARCHAR(120) NOT NULL,
  `car_salario` FLOAT NOT NULL,
  `departamento_dep_id` INT NOT NULL,
  PRIMARY KEY (`car_id`),
  INDEX `cargo_departamento` (`departamento_dep_id` ASC)  ,
  CONSTRAINT `cargo_departamento`
    FOREIGN KEY (`departamento_dep_id`)
    REFERENCES `api_ionic`.`departamento` (`dep_id`))
ENGINE = InnoDB
 
COMMENT = 'Esta tabela contém informações do cargo e seus benefícios.';


-- -----------------------------------------------------
-- Table `api_ionic`.`tipo_contratacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`tipo_contratacao` (
  `cont_id` INT NOT NULL AUTO_INCREMENT,
  `cont_descricao` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`cont_id`))
ENGINE = InnoDB
 
COMMENT = 'Esta tabela armazenará informações sobre a contratação do colaborador, se foi interna ou externa.';


-- -----------------------------------------------------
-- Table `api_ionic`.`colaborador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`colaborador` (
  `col_id` INT NOT NULL AUTO_INCREMENT,
  `col_email` VARCHAR(100) NOT NULL UNIQUE,
  `col_senha` VARCHAR(20) NOT NULL,
  `col_nome` VARCHAR(100) NULL,
  `col_ddd` INT NULL,
  `col_telefone` INT NULL,
  `col_end_rua` VARCHAR(100) NULL,
  `col_end_cidade` VARCHAR(100) NULL,
  `col_end_numero` INT NULL,
  `col_end_bairro` VARCHAR(100) NULL,
  `col_end_cep` INT NULL,
  `col_end_estado` VARCHAR(40) NULL,
  `col_end_complemento` VARCHAR(100) NULL,
  `col_end_regiao` VARCHAR(100) NULL,
  `tipo_contratacao_cont_id` INT NULL,
  `cargo_car_id` INT NULL,
  `departamento_dep_id` INT NULL,
  `col_head_id` INT NULL,
  `col_tipo_pessoa` VARCHAR(100) NULL,
  `col_emp_tempo_formalizacao` FLOAT NULL,
  `col_emp_natureza_juridica` VARCHAR(40) NULL,
  `col_data_fundacao` INT NULL,
  `col_emp_nome` VARCHAR(45) NULL,
  `col_emp_cnpj` BIGINT NULL,
  `col_cpf` BIGINT NULL UNIQUE,
  `col_rg` BIGINT NULL UNIQUE,
  `col_data_nascimento` DATE NULL,
  `col_raca` VARCHAR(45) NULL,
  `col_naturalidade` VARCHAR(45) NULL,
  `col_genero` VARCHAR(45) NULL,
  `col_nacionalidade` VARCHAR(45) NULL,
  `col_estado_civil` VARCHAR(45) NULL,
  `col_filho` VARCHAR(3) NULL,
  PRIMARY KEY (`col_id`),
  INDEX `contratado_cargo` (`cargo_car_id` ASC)  ,
  INDEX `contratado_departamento` (`departamento_dep_id` ASC)  ,
  INDEX `contratado_tipo_contratacao` (`tipo_contratacao_cont_id` ASC)  ,
  CONSTRAINT `contratado_cargo`
    FOREIGN KEY (`cargo_car_id`)
    REFERENCES `api_ionic`.`cargo` (`car_id`),
  CONSTRAINT `contratado_departamento`
    FOREIGN KEY (`departamento_dep_id`)
    REFERENCES `api_ionic`.`departamento` (`dep_id`),
  CONSTRAINT `contratado_tipo_contratacao`
    FOREIGN KEY (`tipo_contratacao_cont_id`)
    REFERENCES `api_ionic`.`tipo_contratacao` (`cont_id`))
ENGINE = InnoDB
 
COMMENT = 'Cadastro dos colaboradores	';

-- -----------------------------------------------------
-- Table `api_ionic`.`notificacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`notificacao`(
  `notificacao_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL UNIQUE,
  PRIMARY KEY (`notificacao_id`),
  FOREIGN KEY (`user_id`)
    REFERENCES `api_ionic`.`colaborador` (`col_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_ionic`.`documentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`documentos` (
  `doc_id` INT NOT NULL AUTO_INCREMENT,
  `doc_link` VARCHAR(200) NOT NULL,
  `doc_tipo` VARCHAR(40) NOT NULL,
  `colaborador_col_id` INT NOT NULL,
  PRIMARY KEY (`doc_id`, `colaborador_col_id`),
  INDEX `fk_documentos_colaborador1_idx` (`colaborador_col_id` ASC)  ,
  CONSTRAINT `fk_documentos_colaborador1`
    FOREIGN KEY (`colaborador_col_id`)
    REFERENCES `api_ionic`.`colaborador` (`col_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
 
COMMENT = 'Repositório dos documentos dos colaboradores\n';


-- -----------------------------------------------------
-- Table `api_ionic`.`historico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`historico` (
  `his_id` INT NOT NULL AUTO_INCREMENT,
  `his_data_desligamento` DATE NULL,
  `his_data_admissao` DATE NOT NULL,
  `his_cargo` VARCHAR(400) NOT NULL,
  `his_salario` FLOAT NOT NULL,
  `his_pesquisa_desligamento` VARCHAR(400) NULL,
  `his_desligamento_descricao` VARCHAR(100) NULL,
  `his_distrato` VARCHAR(100) NULL,
  `colaborador_col_id` INT NOT NULL,
  PRIMARY KEY (`his_id`, `colaborador_col_id`),
  INDEX `fk_historico_colaborador1_idx` (`colaborador_col_id` ASC)  ,
  CONSTRAINT `fk_historico_colaborador1`
    FOREIGN KEY (`colaborador_col_id`)
    REFERENCES `api_ionic`.`colaborador` (`col_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
 
COMMENT = 'Esta tabela armazenará informações sobre a trajetória dos colaboradores durante a sua fase laboral. Tanto de Pessoa Jurídica quanto da Pessoa Física.';


-- -----------------------------------------------------
-- Table `api_ionic`.`trilha_aprendizagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`trilha_aprendizagem` (
  `tri_id` INT NOT NULL AUTO_INCREMENT,
  `tri_status` VARCHAR(40) NOT NULL,
  `tri_curso` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`tri_id`))
ENGINE = InnoDB
 
COMMENT = 'Cadastros de Trilha de Aprendizado e Status de Realização';


-- -----------------------------------------------------
-- Table `api_ionic`.`item_aprendizado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`item_aprendizado` (
  `data_inicio_trilha` DATE NOT NULL,
  `data_termino_trilha` DATE NOT NULL,
  `colaborador_col_id` INT NOT NULL,
  `trilha_aprendizagem_tri_id` INT NOT NULL,
  PRIMARY KEY (`colaborador_col_id`, `trilha_aprendizagem_tri_id`),
  INDEX `fk_item_aprendizado_trilha_aprendizagem1_idx` (`trilha_aprendizagem_tri_id` ASC)  ,
  CONSTRAINT `fk_item_aprendizado_colaborador1`
    FOREIGN KEY (`colaborador_col_id`)
    REFERENCES `api_ionic`.`colaborador` (`col_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_aprendizado_trilha_aprendizagem1`
    FOREIGN KEY (`trilha_aprendizagem_tri_id`)
    REFERENCES `api_ionic`.`trilha_aprendizagem` (`tri_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
 
COMMENT = 'Esta tabela conecta a pessoa física a trilha de aprendizagem correspondente.';


-- -----------------------------------------------------
-- Table `api_ionic`.`qualificacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_ionic`.`qualificacao` (
  `qua_id` INT NOT NULL AUTO_INCREMENT,
  `qua_formacao` VARCHAR(40) NOT NULL,
  `qua_curso` VARCHAR(40) NOT NULL,
  `qua_lingua` VARCHAR(40) NOT NULL,
  `qua_nome_instituicao` VARCHAR(100) NOT NULL,
  `colaborador_col_id` INT NOT NULL,
  PRIMARY KEY (`qua_id`, `colaborador_col_id`),
  INDEX `fk_qualificacao_colaborador1_idx` (`colaborador_col_id` ASC)  ,
  CONSTRAINT `fk_qualificacao_colaborador1`
    FOREIGN KEY (`colaborador_col_id`)
    REFERENCES `api_ionic`.`colaborador` (`col_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
 
COMMENT = 'Esta tabela armazenará informações curriculares.';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
