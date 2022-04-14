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

-- ACESSO AO SISTEMA --
INSERT INTO colaborador (con_email, con_senha)  VALUES ('maria@gmail.com', '1234'); 