USE api_ionic;

-- TIPO DE CONTRATAÇÃO --
INSERT INTO tipo_contratacao (cont_descricao) VALUES ("CLT");
INSERT INTO tipo_contratacao (cont_descricao) VALUES ("PJ");
INSERT INTO tipo_contratacao (cont_descricao) VALUES ("Estagiário");
INSERT INTO tipo_contratacao (cont_descricao) VALUES ("Temporário");

SELECT * FROM tipo_contratacao;

-- DEPARTAMENTOS -- 
INSERT INTO departamento (dep_descricao, dep_head) VALUES ("RH", "Diretor de RH");
INSERT INTO departamento (dep_descricao, dep_head) VALUES ("TI", "Diretor de TI");
INSERT INTO departamento (dep_descricao, dep_head) VALUES ("Marketing", "Diretor de Marketing");
INSERT INTO departamento (dep_descricao, dep_head) VALUES ("Finanças", "Diretor Financeiro");
INSERT INTO departamento (dep_descricao, dep_head) VALUES ("Vendas", "Diretor de Vendas");
INSERT INTO departamento (dep_descricao, dep_head) VALUES ("Produção", "Diretor de Produção");

SELECT * FROM departamento;

-- CARGOS --
-- RH
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor de RH", 1, 1);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Administrador de RH", 1, 1);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Consultor de RH", 2, 1);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Assistente de Departamento Pessoal", 0, 1);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Supervisor de Cargos", 0, 1);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de RH", 0, 1);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Estagiário de RH", 0, 1);
-- TI
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor de TI", 1, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente Técnico", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de TI", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Software", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Segurança de TI", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Administrador de Banco de Dados", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Administrador de Redes", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Arquiteto da Informação", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Administrador de E-commerce", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Administrador de Processamento de Dados", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Desenvolvedor de Software", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Qualidade de Software", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Segurança da Informação", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Sistemas", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Suporte Técnico de TI", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Engenheiro de Software", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Engenheiro de Dados", 0, 2);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Estagiário de TI", 0, 2);
-- Marketing
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor de Marketing", 1, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Marketing", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Coordenador de Marketing", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Marketing", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Marketing", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Mídias Sociais", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de SEO", 0, 3); -- Search Engine Optimization
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de CRO", 0, 3); -- Conversion Rate Optmization
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de UX", 0, 3); -- User Experience
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Cientista de Dados", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Qualidade", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Atendimento", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Marcas", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Programador Front-End", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Programador Back-End", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Arquiteto de Software", 0, 3);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Estagiário de Marketing", 0, 3);
-- Finanças
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor Financeiro", 1, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente Contábil", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista Contábil", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista Estatístico", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Especialista de Planejamento Financeiro", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Compliance", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Compliance", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Consultor de Investimento", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Finanças Estruturadas", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Controller", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Crédito", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Fusões e Aquisições", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Conselheiro de Aposentadoria", 0, 4);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Estagiário de Finanças", 0, 4);
-- Vendas
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor de Vendas", 1, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Supervisor de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Coordenador de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Consultor de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Suporte a Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Auxiliar de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Auxiliar Administrativo de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Inside Seller", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Customer Experience", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Representante de Desenvolvimento de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Promotor de Vendas", 0, 5);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Pós-Vendas", 0, 5);
-- Produção
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Diretor de Industrial", 1, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Gerente de Produção", 0, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Analista de Desempenho", 0, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Supervisor de Linha", 0, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Apontador de Produção", 0, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Programador CND", 0, 6); -- Coordena máquinas de Comando Numérico Computadorizado]
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Programador da Produção", 0, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Operador de Máquina", 0, 6);
INSERT INTO cargo (car_descricao, car_nivel_acesso, departamento_dep_id) VALUES ("Administrador de Almoxarife", 0, 6);

SELECT * FROM cargo;

-- COLABORADOR --

INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa) VALUES ("milla.moreira@ionic.health", "1234", "Milla Moreira", "12", "986571945", "Rua Ferdinando Lima", "47", "Alphaville", "17845134", "SP", "", "Sudeste", "1", "1", "1", "Física");
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("anna.costa@ionic.health", "1234", "Anna Costa", "12", "986571735", "Rua Hortência Melo", "14", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "3", "1", "Física", 1);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("joao.almeida@ionic.health", "1234", "João Almeida", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "3", "7", "1", "Física", 1);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa) VALUES ("camila.monteiro@ionic.health", "1234", "Camila Monteiro", "12", "986571245", "Rua Estados Unidos", "78", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "8", "2", "Física");
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("flavia.alves@ionic.health", "1234", "Flávia Alves", "12", "977574245", "Alameda das Laranjeiras", "23", "Novo Horizonte", "75245134", "SP", "", "Sudeste", "1", "10", "2", "Física", 4);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("matheus.sakuragui@ionic.health", "1234", "Matheus Sakuragui", "12", "986571245", "Rua Estados Unidos", "47", "Putim", "12245134", "SP", "", "Sudeste", "4", "18", "2", "Física", 5);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("roberta.lima@ionic.health", "1234", "Roberta Lima", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "3", "25", "2", "Física", 5);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa) VALUES ("gizeli.fonseca@ionic.health", "1234", "Gizeli Fonseca", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "3", "26", "3", "Física");
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("mariana.ayumi@ionic.health", "1234", "Mariana Ayumi", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "34", "3", "Física", 8);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("emerson.araujo@ionic.health", "1234", "Emerson Araujo", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "42", "3", "Física", 8);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa) VALUES ("adrina.font@ionic.health", "1234", "Adriana Font", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "43", "4", "Física");
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("fernando.poli@ionic.health", "1234", "Fernando Poli", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "46", "4", "Física", 11);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("rikio.anzai@ionic.health", "1234", "Rikio Anzai", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "3", "56", "4", "Física", 11);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa) VALUES ("maria.faria@ionic.health", "1234", "Maria Clara Faria", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "57", "5", "Física");
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("lucas.santos@ionic.health", "1234", "Lucas Santos", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "62", "5", "Física", 14);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("rodrigo.silva@ionic.health", "1234", "Rodrigo Silva", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "4", "70", "5", "Física", 14);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa) VALUES ("janaina.gusmao@ionic.health", "1234", "Janaína Gusmão", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "72", "6  ", "Física");
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("gabriel.telles@ionic.health", "1234", "Gabriel Telles", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "76", "6  ", "Física", 17);
INSERT INTO colaborador (con_email, con_senha, con_nome, con_ddd, con_telefone, end_rua, end_numero, end_bairro, end_cep, end_estado, end_complemento, end_regiao, tipo_contratacao_cont_id, cargo_car_id, departamento_dep_id, tipo_pessoa, head_id) VALUES ("leonardo.salles@ionic.health", "1234", "Leonardo Salles", "12", "986571245", "Rua Estados Unidos", "47", "Vista Verde", "12245134", "SP", "", "Sudeste", "1", "80", "6  ", "Física", 18);

SELECT * FROM colaborador;


-- PESSOA FÍSICA --
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 1);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 2);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 3);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 4);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 5);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 6);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 7);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 8);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 9);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 10);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 11);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 12);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 13);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 14);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 15);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 16);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Feminino', 'Brasileiro', 'Solteiro', 'Não', 17);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 18);
INSERT INTO pessoa_fisica (user_cpf, user_data_nascimento, user_raca, user_naturalidade, user_genero, user_nacionalidade, user_estado_civil, user_filho, colaborador_con_id) VALUES (24512512590, '1989-12-13', 'Amarelo', 'São José dos Campos', 'Masculino', 'Brasileiro', 'Solteiro', 'Não', 19);

-- QUALIFICAÇÃO -- 
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (1, 'FATEC', 'Superior', 'DSM', 'Inglês', 1);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (2, 'FATEC', 'Superior', 'DSM', 'Inglês', 2);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (3, 'FATEC', 'Superior', 'DSM', 'Inglês', 3);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (4, 'FATEC', 'Superior', 'DSM', 'Inglês', 4);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (5, 'FATEC', 'Superior', 'DSM', 'Inglês', 5);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (6, 'FATEC', 'Superior', 'DSM', 'Inglês', 6);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (7, 'FATEC', 'Superior', 'DSM', 'Inglês', 7);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (8, 'FATEC', 'Superior', 'DSM', 'Inglês', 8);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (9, 'FATEC', 'Superior', 'DSM', 'Inglês', 9);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (10, 'FATEC', 'Superior', 'DSM', 'Inglês', 10);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (11, 'FATEC', 'Superior', 'DSM', 'Inglês', 11);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (12, 'FATEC', 'Superior', 'DSM', 'Inglês', 12);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (13, 'FATEC', 'Superior', 'DSM', 'Inglês', 13);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (14, 'FATEC', 'Superior', 'DSM', 'Inglês', 14);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (15, 'FATEC', 'Superior', 'DSM', 'Inglês', 15);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (16, 'FATEC', 'Superior', 'DSM', 'Inglês', 16);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (17, 'FATEC', 'Superior', 'DSM', 'Inglês', 17);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (18, 'FATEC', 'Superior', 'DSM', 'Inglês', 18);
INSERT INTO qualificacao (qua_id, qua_nome_instituição, qua_formacao, qua_curso, qua_lingua, colaborador_con_id) VALUES (19, 'FATEC', 'Superior', 'DSM', 'Inglês', 19);

SELECT * FROM qualificacao;

-- ACESSO AO SISTEMA --
INSERT INTO colaborador (con_email, con_senha)  VALUES ('adm@ionic.health', '1234'); 