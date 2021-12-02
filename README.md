<h1 align="center"> Api para Controle de Vacinas </h1>

<h2>Índice</h2>

- <a href="#sobre">Sobre
    - <a href="#funcionalidades">Funcionalidades da API
- <a href="#tecnologias">Tecnologias
- <a href="#iniciando-projeto">Iniciando o Projeto
    - <a href="#requisitos">Pré-requisitos
    - <a href="#instalacao">Instalação
    - <a href="#uso">Uso
- <a href="#rotas">Rotas
- <a href="#deploy">Deploy
- <a href="#contato">Contato

<hr>

<h2 id="sobre">Sobre</h2>

<p align="left">API para controle de vacinas, com o objetivo de ficar com a vacinação sempre em dia. Desenvolvi esta API para o projeto final do curso de Nodejs do Women Can Code. Trata-se de uma API Rest em Node.js, com banco de dados PostgreSQL. Está hospedada no Heroku através do link: *https://api-vaccination-control.herokuapp.com/*
</p>

<hr>

<h3 id="funcionalidades">Funcionalidades da API:</h3>

- [x] Cadastra uma nova vacina
- [x] Lista todas as vacinas
- [x] Lista vacina por status: vacinado ou não vacinado
- [x] Lista vacina por ID
- [x] Atualiza cadastro de vacina
- [x] Altera status para vacinado ou não vacinado
- [x] Deleta vacina

<hr>

<!-- TECHNOLOGIES -->

<h2 id="tecnologias">Tecnologias</h2>
  
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [Postgres](https://www.postgresql.org/)
  - [Framework Express](https://expressjs.com/pt-br/)
  - [ORM Sequelize](https://sequelize.org/)

<hr>

<h2 id="iniciando-projeto">Iniciando o Projeto</h2>

<h3 id="requisitos">Pré-requisitos</h3>

1. Node JS

  *https://nodejs.org/en/*


2. Npm ou Yarn

  *https://www.npmjs.com/*


3. PostgreSQL

  *https://www.postgresql.org/download/*

<hr>


<h3 id="instalacao">Instalação</h3>

1. Clonar o repositório:

   ```sh
   git clone https://github.com/LaomaNogueira/api-vaccination-control.git
   ```
   ```
   cd api-vaccination-control
   ```

2. Instalar o pacote:

   ```sh
   npm install
   ```
<hr>

<h3 id="uso">Uso</h3>

1. Copie o arquivo `.env.example`, renomeie para `.env`, crie suas variáveis de ambiente e substitua-as.


2. Para subir o servidor:

   ```sh
   npm start
   ```


3. Rodar os testes conforme indicado abaixo.

<hr>

<h2 id="rotas">Rotas</h2>

Com a API em funcionamento, vamos rodar os testes via [Insomnia](https://insomnia.rest/download) (ou algum similar). 
Para testar a API via servidor local utilize a rota: *http://localhost:3000/*, nos exemplos utilizaremos as rotas da aplicação hospedada no Heroku: *https://api-vaccination-control.herokuapp.com/*. Seguem os testes:


#### *POST*:

- __<u>Cadastrar nova vacina</u>__ - rota: *https://api-vaccination-control.herokuapp.com/vaccines*
  Preencher o JSON, conforme exemplo:

  ```
  {
	"name": "BCG",                             |  Required   |   String   |
	"expected_date": "10/01/2022",             |  Required   |   String   |
	"vaccinated": false                        |             |   String   |  Valor padrão false, caso não seja informado no JSON
  }
  ```

  RETORNO:

  ```
  {
    "id": "2",
    "name": "BCG",
    "expected_date": "10/01/2022",
    "vaccinated": false,
    "createdAt": "2021-12-02T00:45:53.021Z",
    "updatedAt": "2021-12-02T00:45:53.021Z"
  }
  ```

  <hr>

#### *GET*:

- __<u>Listar vacinas</u>__ - rota: *https://api-vaccination-control.herokuapp.com/vaccines*
  - Retornos JSON possíveis:
    - Caso seja informado o status vacinado na query, retorna os cadastros vacinados ou não;
    - Caso não, retorna todos as vacinas cadastradas.
  - Query:  vaccinated = BOOLEAN
  
  RETORNO:
  
  ```
  [
    {
    "id": "3",
    "name": "HPV",
    "expected_date": "10/05/2022",
    "vaccinated": false,
    "createdAt": "2021-12-02T00:46:33.045Z",
    "updatedAt": "2021-12-02T00:46:33.045Z"
    }
  ]
  ```

- __<u>Listar vacina por ID</u>__ - rota: *https://api-vaccination-control.herokuapp.com/vaccines/{id}*
  - Informar o ID da vacina no parâmetro.
  - Retorna JSON com todas as vacinas cadastradas.
  - Caso seja informada uma vacina com ID que não existe no cadastro, retorna: <code>404 { "message":"No vaccine found with ID 10" }</code>
  
  RETORNO:

  ```
  [
    {
        "id": "1",
        "name": "Rubéola",
        "expected_date": "01/12/2021",
        "vaccinated": true,
        "createdAt": "2021-12-02T00:44:05.135Z",
        "updatedAt": "2021-12-02T01:37:28.288Z"
    }
  ]
  ```
  <hr>

#### *PUT*:

- __<u>Atualizar vacinas</u>__ - rota: *https://api-vaccination-control.herokuapp.com/vaccines/{id}*
  - Informar o ID da vacina a ser atualizada no parâmetro.
  - Caso seja informada uma vacina com ID que não existe no cadastro, retorna: <code>404 { "message":"No vaccine found with ID 10" }</code>

  Preencher o JSON, conforme exemplo:

  ```
  {
    "name": "Rubéola",
    "expected_date": "15/05/2022",
    "vaccinated": false
  }
  ```

  RETORNO:

  ```
  {
    "message": "1 updated vaccine(s)"
  }
  ```

<hr>

#### *PATCH*:
- __<u>Marcar como vacinado</u>__ - rota: *https://api-vaccination-control.herokuapp.com/vaccines/{id}/vaccinated*
    - Informar o ID da vacina a ser atualizada no parâmetro da requisição;
    - Caso seja informada uma vacina com ID que não existe no cadastro, retorna: <code>404 { "message":"No vaccine found with ID 10" }</code>
    
    Preencher o JSON com o status vacinado, conforme exemplo:

    ```
    {
      "vaccinated": true
    }
    ```

    RETORNO:

    ```
    {
      "message": "1 vaccine(s) status updated"
    }
    ```
<hr>

#### *DELETE*:
- __<u>Deletar vacina</u>__ - rota: *https://api-vaccination-control.herokuapp.com/vaccines/{id}*
  - Informar o ID da vacna a ser deletada no parâmetro da requisição.
  - Caso seja informada uma vacina com ID que não existe no cadastro, retorna: <code>404 { "message":"No vaccine found with ID 10" }</code>
  
  RETORNO:

  ```
  {
    "message": "1 vaccine(s) successfully deleted"
  }
  ```

<hr>

<!-- DEPLOY -->

<h2 id="deploy">Deploy</h2>

**__Heroku__**: [API Vaccination Control](https://api-vaccination-control.herokuapp.com/) 

<hr>

<!-- CONTACT -->

<h2 id="contato">Contato</h2>

#### Laoma Nogueira

<p align="left"> 🤝 Se tiver interesse em conversar comigo, será ótimo trocar uma ideia com você! Estes são os meus contatos: </p>

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/LaomaNogueira)](https://github.com/LaomaNogueira)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/laoma-nogueira/)](https://www.linkedin.com/in/laoma-nogueira/)
<a href="mailto:laomanogueira@gmail.com" alt="gmail" target="_blank">
<img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=mailto:laomanogueira@gmail.com" /></a>

<hr>