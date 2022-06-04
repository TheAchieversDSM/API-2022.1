ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

flush privileges;

select * from colaborador order by col_nome;

select * from qualificacao;

INSERT INTO colaborador (con_email, con_senha)  VALUES ('maria@gmail.com', '1234'); 