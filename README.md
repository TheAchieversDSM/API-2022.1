<br id="inicio">


<h1 align="center">API 1° Semestre de 2022 - The Achievers & Ionic Health :microscope:</h1>
 <p align="center">
     <a href="#sobre">Sobre</a> • 
     <a href="#status">Status</a> •
     <a href="#techtools">Ferramentas e Tecnologias</a> •
     <a href="#backlog-sprint">Backlog das Sprints</a> •
     <a href="#entregas">Entregas • 
     <a href="#equipe">Equipe</a> 
</p>

<span id="sobre">

### :mag_right: Sobre o projeto:
<p>Em conjunto à àrea de Recursos Humanos e Departamento Pessoal, deve-se desenvolver uma plataforma para controle de todos os talentos da empresa, ou seja, funcionários. O sistema deve conter a parte de cadastro de colaboradores, seja ele CLT ou PJ, trazendo, assim, informações sobre a sua contratação, controle de documenttos, dados, entre outros recursos, levando sempre em consideração a Lei Geral de Proteção de Dados Pessoais, LGPD, para acesso restrito de informações confidenciais.</p>
<p>A ideia do sistema, definida entre a equipe em conjunto a cliente, é uma unificação de processos importantes, não só ao departamento de Recursos Humanos, mas sim para a empresa como um todo. Assim como descrito no backlog, a aplicação tem como objetivo facilitar o processo de contratação, ficando nas mãos do Administrador de RH apenas a criação inicial do novo colaborador e, depois que ele fizer todo o processo de auto-cadastro, o administrador tem a possibilidade de ver as informações enviadas e aprovar ou não. Além disso, cada colaborador terá um perfil próprio com todas as informações, acesso a um organograma separado por departamento, lista de usuários e acesso a uma Trilha de Aprendizagem, na qual é possível fazer envio de materiais a um curso e destinar este a um colaborador.</p>
 
 <span id="status">

 ### :bookmark_tabs: Status do projeto: Iniciado :hourglass:	
  
 <span id="techtools">
 
 ### :hammer_and_wrench: Ferramentas e Tecnologias
 
 <p align="center">
 <img src="https://img.shields.io/badge/Slack-292A2D?style=for-the-badge&logo=slack&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/Discord-292A2D?style=for-the-badge&logo=discord&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/Trello-292A2D?style=for-the-badge&logo=trello&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/Figma-292A2D?style=for-the-badge&logo=figma&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/CSS3-292A2D?style=for-the-badge&logo=css3&logoColor=54C5CE"/> <br> <img src="https://img.shields.io/badge/JavaScript-292A2D?style=for-the-badge&logo=javascript&logoColor=54C5CE"/>  <img src="https://img.shields.io/badge/TypeScript-292A2D?style=for-the-badge&logo=typescript&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/Node.js-292A2D?style=for-the-badge&logo=nodedotjs&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/React-292A2D?style=for-the-badge&logo=react&logoColor=54C5CE"/> <img src="https://img.shields.io/badge/MySQL-292A2D?style=for-the-badge&logo=mysql&logoColor=54C5CE"/>
</p>
  
<span id="backlog-sprint"> 

### :bar_chart: Backlog
 
#### Timeline Backlog 
![Timeline](https://github.com/TheAchieversDSM/API-2022.1/blob/main/doc/backlog/timeline_total.png)
 
#### Backlog do Produto
 
##### Requisitos Funcionais
ID | User Story | Sprint | Requisitos | Prioridade | Status 
---|------------|--------|------------|------------|--------
RF-1 | US-1 | 1 | Cadastro do colaborador | Alta | ✔️
RF-2 | US-1 | 1 | Completar cadastro do colaborador | Alta | ✔️
RF-3 | US-2 | 1 | Visualizar informações fornecidas pelo colaborador | Alta | ✔️
RF-4 | US-2 | 1 | Atualização das informações do colaborador | Média | 🔲
RF-5 | US-2 | 1 | Exclusão de colaboradores | Baixa | 🔲
RF-6 | US-3 | 2 | Visualizar diferentes níveis de cargo por um organograma | Alta | ✔️
RF-7 | US-4 | 2 | Visualizar informações cadastradas pelo colaborador e avaliar possível aprovação | Alta | 🔲
RF-8 | US-5 | 2 | Visualizar e realizar download de relatórios com informações dos colaboradores | Média | ✔️
RF-9 | US-6 | 3 | Acesso às documentações e normas da empresa | Baixa | 🔲
RF-10 | US-7 | 3 | Plataforma com materiais para Onbording de colaboradores referentes à seus departamentos | Alta | 🔲
RF-11 | US-8 | 3 | Upload de materiais para compor os cursos de Onboarding na Trilha de Aprendizagem | Alta | 🔲
RF-12 | US-8 | 3 | Definir público-alvo dos materiais adicionados ao sistema na Trilha de Aprendizagem | Alta | 🔲
RF-13 | US-9 | 3 | Visualização do progresso individual dos cursos de Onboarding cadastrados na Trilha de Aprendizagem | Média | 🔲
RF-14 | US-10 | 3 | Cadastro de possíveis novos cargos | Baixa | 🔲


##### Requisitos Não Funcionais
ID | User Story | Sprint | Requisitos | Prioridade | Status 
---|------------|--------|------------|------------|--------
RNF-1 | US-1 | 1 | Desenvolvimento de banco de dados *MySQL* para armazenamento de dados | Alta | ✔️
RNF-2 | US-1 | 1 | Desenho da arquitetura da solução (<a href="https://github.com/TheAchieversDSM/API-2022.1/blob/main/doc/wireframe/wireframe%20-%20Ionic%20Health.pdf">Wireframe</a>) | Alta | ✔️
RNF-2 | US-1 | 1 | Conexão do banco de dados ao sistema | Alta | ✔️
RNF-3 | US-1 | 1 | Utilizar *Node.JS*, *TypesScript* e *JavaScript* | Alta | ✔️
RNF-4 | US-1 | 1 | Utilizar a biblioteca *React.js* | Alta | ✔️
RNF-5 | US-1 | 1 | Limitar acesso de não-colaboradores ao sistema | Média | ✔️
RNF-6 | US-2 | 1 | Diferentes níveis de acesso no sistema | Alta | ✔️
RNF-7 | US-2 | 1 | Display de informações gravadas no banco de dados | Alta | ✔️
RNF-8 | US-2 | 1 | Criação das funções _Delete_ e _Update_ em Node.js | Alta | 🔲
RNF-9 | US-2 | 2 | Armazenar documentos dos colaboradores em um repositório específico | Alta | ✔️
RNF-10 | US-3 | 2 | Completar organograma com informações do banco de dados | Alta | ✔️
RNF-11 | US-4 | 2 | Gerar notificação ao cadastro ter sido completo | Alta | ✔️
RNF-12 | US-5 | 2 | Puxar informações do banco de dados e passar para um _.pdf_ para possíveis relatórios | Média | ✔️
RNF-13 | US-6 | 3 | Anexar arquivos referentes às normas e políticas da empresa | Baixa | 🔲
RNF-14 | US-7 | 3 | Restringir acesso aos arquivos referentes aos cursos de Onboarding da Trilha de Aprendizagem | Baixa | 🔲
RNF-15 | US-8 | 3 | Upload de arquivos referentes aos cursos de Onboarding da Trilha de Aprendizagem em um repositório específico | Baixa | 🔲
RNF-16 | US-9 | 3 | Identificar progresso de conclusão dos cursos de Onboarding da Trilha de Aprendizagem | Média | 🔲
RNF-17 | - | - | Manual do usuário para navegação | Média | ✔️
 
#### Backlog da Sprint #1
 
ID  | Tarefa | Prioridade | Status
----|--------|------------|---------- 
#01 | Criação de User Stories | Alta | :heavy_check_mark:
#02 | Desenvolvimento de Wireframe | Alta | :heavy_check_mark:
#03 | Desenvolvimento do modelo conceitual do Banco de Dados | Média | :heavy_check_mark:
#04 | Desenvolvimento do modelo lógico do Banco de Dados | Média | :heavy_check_mark:
#05 | Desenvolvimento do modelo físico do Banco de Dados | Alta | :heavy_check_mark:
#06 | Conexão do back-end com o Banco de Dados | Alta | :heavy_check_mark:
#07 | Desenvolvimento da interface de Login | Média | :heavy_check_mark:
#08 | Desenvolvimento da interface de Novo Colaborador | Alta | :heavy_check_mark:
#09 | Desenvolvimento da interface de Organograma | Alta | :heavy_check_mark:
#10 | Desenvolvimento do back-end da interface de Login | Média | :heavy_check_mark:
#11 | Desenvolvimento do back-end da interface de Novo Colaborador | Alta | :heavy_check_mark:
#12 | Desenvolvimento do back-end da interface de Organograma | Baixa | :x:
#20 |	Criar o Manual do Usuário | Média | :heavy_check_mark:
 
#### Backlog da Sprint #2
ID  | Tarefa | Prioridade | Status
----|--------|------------|---------- 
#12 | Desenvolvimento do back-end da interface de Organograma | Alta | :heavy_check_mark:
#13 |	Desenvolvimento da interface de Notificações | Alta | :heavy_check_mark:
#16 |	Desenvolvimento do back-end da interface de Notificações |  Alta | :black_square_button:
#18 |	Anexar documentos na área de Cadastro do Colaborador | Alta | :heavy_check_mark:
#19 | Definir acessos dos usuários através de níveis | Alta | :heavy_check_mark:
#21 | Ajustes no banco de dados | Alta | :heavy_check_mark:
#22 | Ajustes na página do colaborador | Alta | :heavy_check_mark:
#23 | Ajustes nas rotas de navegação | Alta | :heavy_check_mark:
#24 | Desenvolvimento da interface de Listagem de Colaboradores | Média | :heavy_check_mark:
#25 | Desenvolvimento do back-end da interface de Listagem de Colaboradores | Média | :heavy_check_mark:
#26 | Redirecionar para a página do colaborador ao clicar em seu nome | Alta | :heavy_check_mark:
#27 |	Ajustes no Manual do Usuário	| Média | :black_square_button:
 

### :clipboard: Estruturação das pastas

<p>:file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc"><strong>DOC</strong></a> - Pasta que contém artefatos de processos importantes para o desenvolvimento da equipe;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc/backlog"><strong>backlog</strong></a> - pasta que contém o quanto de esforço foi desempenhado na sprint;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc/burndown"><strong>burndown</strong></a> - pasta que contém o quanto de esforço foi desempenhado na sprint;</p>
 <p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc/database"><strong>database</strong></a> - pasta que contém todos os modelos de dados desenvolvidos, seja conceitual, lógico ou físico;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc/manual"><strong>manual</strong></a> - pasta que contém o manual de software produzido para auxiliar na utilização do sistema;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc/user%20stories"><strong>user stories</strong></a> - pasta que contém os user stories criados para um maior entendimento de como desenvolver o software para que realmente ajude a cliente;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/doc/wireframe"><strong>wireframe</strong></a> - pasta que contém o wireframe das telas a serem desenvolvidas no sistema;</p>
 
<p>:file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/src"><strong>SRC</strong></a> - Pasta que contém os códigos desenvolvidos separados em mais duas pastas;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/src/client"><strong>client</strong></a> - pasta que contém os códigos referente à parte do <em>front-end</em>;</p>
<p> | - :open_file_folder: <a href="https://github.com/TheAchieversDSM/API-2022.1/tree/main/src/server"><strong>server</strong></a> - pasta que contém os códigos referente à parte do <em>back-end</em>;</p>
 
 
<span id="entregas">

### :dart: Entregas

Sprint ID | Data | Tag | Vídeo | Status
----------|------|-----|-------|--------
#1 | 25.03.22 - 14.04.22 | <a href="https://github.com/TheAchieversDSM/API-2022.1/releases/tag/%231">Aqui</a> | <a href="https://www.youtube.com/watch?v=tuS3RCgVZbA&t=1s">Link</a> | :heavy_check_mark:
#2 | 25.04.22 - 15.05.22 | :stop_sign: | :stop_sign: | :stop_sign:
#3 | 16.05.22 - 05.06.22 | :stop_sign: | :stop_sign: | :stop_sign:

<span id="equipe">

### :busts_in_silhouette: Equipe:
Função | Nome | GitHub & LinkedIn
-------|------|-------------------
Scrum Master | Maria Clara Alves de Faria | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/mclaralvs) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=54C5CE&color=292A2D" />](https://www.linkedin.com/in/mclaralvs/)
Product Owner | Gizeli Martins Fonseca | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/gizelifonseca)
Dev Team | Evora de Castro | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/MinEvora) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=54C5CE&color=292A2D" />](https://www.linkedin.com/in/evora-castro-704911133/)
Dev Team | Mariana Ayumi Tamay | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/Mariayumi) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=54C5CE&color=292A2D" />](https://www.linkedin.com/in/mariana-ayumi-159582222/)
Dev Team | Matheus Henrique Lemes Sakuragui | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/MatheusSakuragui) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=54C5CE&color=292A2D" />](https://www.linkedin.com/in/matheus-henrique-lemes-sakuragui/)
Dev Team | Rikio Anzai | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/rikioanzai) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=54C5CE&color=292A2D" />](https://www.linkedin.com/in/rikio-anzai-053ba921b/)
Dev Team | Rodrigo de Andrade | [<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=54C5CE&color=292A2D"/>](https://github.com/RodrigodeAndrade90) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=54C5CE&color=292A2D" />](https://www.linkedin.com/in/rodrigo-de-andrade-a34605104/)

> Instituição: Fatec São José dos Campos - Prof. Jessen Vidal
> 
> Curso: Desenvolvimento de Software Multiplataforma/2º Semestre
